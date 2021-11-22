import {Tokenizer} from "./tokenizer";
import {Token} from "../tokens";

/**
 * spec: https://262.ecma-international.org/12.0/#sec-line-terminators
 */
const LINE_FEED = "\u000A";
const CARRIAGE_RETURN = "\u000D";
const LINE_SEPARATOR = "\u2028";
const PARAGRAPH_SEPARATOR = "\u2029";

const lineTerminatorList = [LINE_FEED, CARRIAGE_RETURN, LINE_SEPARATOR, PARAGRAPH_SEPARATOR];
export const lineTerminatorTokenizer: Tokenizer = (chars) => {
  if (chars.length === 0) {
    return [Token.NotFound, 0];
  }

  return lineTerminatorList.some((s) => s === chars[0]) ? [Token.LineTerminator, 1] : [Token.NotFound, 0];
};

const lineTerminatorSequenceList = [LINE_FEED, LINE_SEPARATOR, PARAGRAPH_SEPARATOR];
export const lineTerminatorSequenceTokenizer: Tokenizer = (chars) => {
  if (chars.length === 0) {
    return [Token.NotFound, 0];
  }

  if (lineTerminatorSequenceList.some((s) => s === chars[0])) {
    return [Token.LineTerminatorSequence, 1];
  }

  if (chars.length === 1) {
    return chars[0] !== CARRIAGE_RETURN ? [Token.NotFound, 0] : [Token.MultipleVariants, 1];
  }

  const twoBytes = chars.slice(0, 2);

  if (twoBytes[0] !== CARRIAGE_RETURN) {
    return [Token.NotFound, 0];
  }

  return twoBytes[1] === LINE_FEED ? [Token.LineTerminatorSequence, 2] : [Token.LineTerminatorSequence, 1];
};
