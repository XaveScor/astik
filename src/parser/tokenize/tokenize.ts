import {CharStream} from "../stream/char-stream";
import {Token} from "./tokens";
import {whiteSpaceTokenizer} from "./tokenizers/white-space";
import {Tokenizer} from "./tokenizers/tokenizer";
import {lineTerminatorSequenceTokenizer} from "./tokenizers/line-terminator";

type TokenizedDocument = ReadonlyArray<Token>;
const tokenizers: ReadonlyArray<Tokenizer> = [whiteSpaceTokenizer, lineTerminatorSequenceTokenizer];

export function tokenize(input: string): TokenizedDocument {
  const stream = new CharStream(input);
  const res = [];
  while (!stream.isClosed()) {
    let currentString = "";
    let answer: Token | null = null;
    let answerLen = -1;

    nextToken: for (const tokenizer of tokenizers) {
      while (true) {
        if (!stream.isClosed()) {
          currentString += stream.nextChar();
        }
        const [token, len] = tokenizer(currentString);
        switch (token) {
          case Token.NotFound:
            continue nextToken;
          case Token.MultipleVariants:
            continue;
          default:
            if (len > answerLen) {
              answer = token;
              answerLen = len;
              break nextToken;
            }
        }
      }
    }

    if (answer === null) {
      throw new Error("Parse Error");
    }

    res.push(answer);
    stream.movePointerBack(currentString.length - answerLen);
  }

  return res;
}
