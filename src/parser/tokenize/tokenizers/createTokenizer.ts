import {concat, createPosition} from "../position";
import {Token} from "../tokens";
import {Flags, Tokenizer} from "../types";

type CreateTokenizerArgs = {
  startSequence?: string;
  finishSequence?: string;
  tokenizer: Tokenizer;
};
const defaultFlags: Flags = {
  optional: false,
};

export function createTokenizer({startSequence = "", finishSequence = "", tokenizer}: CreateTokenizerArgs): Tokenizer {
  const _tokenizer: Tokenizer = (chars, flags) => {
    let position = createPosition(0);
    let len = 0;
    if (chars.length === 0) {
      return [Token.MultipleVariants, position, len];
    }
    if (startSequence.startsWith(chars)) {
      return [Token.MultipleVariants, concat(position, createPosition(chars.length)), len + chars.length];
    }
    if (!chars.startsWith(startSequence)) {
      return [Token.NotFound, position, len];
    }
    position = concat(position, createPosition(startSequence.length));
    len += startSequence.length;
    const commonPart = chars.slice(startSequence.length, chars.length);
    const tokenizerResult = tokenizer(commonPart, flags);
    position = concat(position, tokenizerResult[1]);
    len += tokenizerResult[2];
    switch (tokenizerResult[0]) {
      case Token.NotFound:
        return tokenizerResult;
      case Token.MultipleVariants:
        return [tokenizerResult[0], position, len];
    }
    if (len === chars.length) {
      return [tokenizerResult[0], position, len];
    }
    const finishChars = chars.slice(startSequence.length + tokenizerResult[2], chars.length);
    if (finishChars === finishSequence) {
      return [tokenizerResult[0], concat(position, createPosition(finishChars.length)), len + finishChars.length];
    }
    if (finishSequence.startsWith(finishChars)) {
      return [Token.MultipleVariants, createPosition(chars.length), chars.length];
    }

    return [Token.NotFound, createPosition(0), 0];
  };

  return (chars, flags = defaultFlags) => {
    const result = _tokenizer(chars, flags);
    if (flags.optional && result[0] === Token.NotFound) {
      return [Token.Empty, createPosition(0), 0];
    }

    return result;
  };
}
