import {Tokenizer} from "../types";
import {Token} from "../tokens";
import {createPosition} from "../position";

const lenZero = createPosition(0);
const lenOne = createPosition(1);
const lenTwo = createPosition(2);

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
    return [Token.NotFound, lenZero, 0];
  }

  return lineTerminatorList.some((s) => s === chars[0])
    ? [Token.LineTerminator, lenOne, 1]
    : [Token.NotFound, lenZero, 0];
};

const lineTerminatorSequenceList = [LINE_FEED, LINE_SEPARATOR, PARAGRAPH_SEPARATOR];
export const lineTerminatorSequenceTokenizer: Tokenizer = (chars) => {
  if (chars.length === 0) {
    return [Token.NotFound, lenZero, 0];
  }

  if (lineTerminatorSequenceList.some((s) => s === chars[0])) {
    return [Token.LineTerminatorSequence, lenOne, 1];
  }

  if (chars.length === 1) {
    return chars[0] !== CARRIAGE_RETURN ? [Token.NotFound, lenZero, 0] : [Token.MultipleVariants, lenOne, 1];
  }

  const twoBytes = chars.slice(0, 2);

  if (twoBytes[0] !== CARRIAGE_RETURN) {
    return [Token.NotFound, lenZero, 0];
  }

  return twoBytes[1] === LINE_FEED
    ? [Token.LineTerminatorSequence, lenTwo, 2]
    : [Token.LineTerminatorSequence, lenOne, 1];
};
