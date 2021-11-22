import {CharStream} from "../stream/char-stream";
import {Token} from "./tokens";
import {whiteSpaceTokenizer} from "./tokenizers/white-space";
import {lineTerminatorSequenceTokenizer} from "./tokenizers/line-terminator";
import type {DocumentNode, TokenizedDocument, Tokenizer} from "./types";
import {comparePositions, concat, createPosition} from "./position";

const tokenizers: ReadonlyArray<Tokenizer> = [whiteSpaceTokenizer, lineTerminatorSequenceTokenizer];
const initAnswerPosition = createPosition(-1);
export function tokenize(input: string): TokenizedDocument {
  const stream = new CharStream(input);
  const res: Array<DocumentNode> = [];
  let startPosition = createPosition(0);
  while (!stream.isClosed()) {
    let currentString = "";
    let answer: Token | null = null;
    let answerPosition = initAnswerPosition;
    let answerLen = -1;

    nextToken: for (const tokenizer of tokenizers) {
      while (true) {
        if (!stream.isClosed()) {
          currentString += stream.nextChar();
        }
        const [token, position, tokenLen] = tokenizer(currentString);
        switch (token) {
          case Token.NotFound:
            continue nextToken;
          case Token.MultipleVariants:
            continue;
          default:
            if (comparePositions(position, answerPosition) > 0) {
              answer = token;
              answerPosition = position;
              answerLen = tokenLen;
              break nextToken;
            }
        }
      }
    }

    if (answer === null) {
      throw new Error("Parse Error");
    }

    const finishPosition = concat(startPosition, answerPosition);
    const node: DocumentNode = {
      start: startPosition,
      finish: finishPosition,
      value: currentString.slice(0, answerLen),
      token: answer,
    };
    res.push(node);
    stream.movePointerBack(currentString.length - answerLen);
    startPosition = finishPosition;
  }

  return res;
}
