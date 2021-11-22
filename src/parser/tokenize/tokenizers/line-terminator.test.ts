import {suite} from "uvu";
import * as assert from "uvu/assert";
import {Token} from "../tokens";
import {createPosition} from "../position";
import {lineTerminatorSequenceTokenizer, lineTerminatorTokenizer} from "./line-terminator";

const lenZero = createPosition(0);
const lenOne = createPosition(1);
const lenTwo = createPosition(2);

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_3 = suite("Spec 12.3");

spec12_3("base non-line-terminator validation", () => {
  assert.equal(lineTerminatorTokenizer("1"), [Token.NotFound, lenZero, 0]);
});

spec12_3("LINE FEED validation", () => {
  assert.equal(lineTerminatorTokenizer("\u000A"), [Token.LineTerminator, lenOne, 1]);
});

spec12_3("CARRIAGE RETURN validation", () => {
  assert.equal(lineTerminatorTokenizer("\u000D"), [Token.LineTerminator, lenOne, 1]);
});

spec12_3("LINE SEPARATOR validation", () => {
  assert.equal(lineTerminatorTokenizer("\u2028"), [Token.LineTerminator, lenOne, 1]);
});

spec12_3("PARAGRAPH SEPARATOR validation", () => {
  assert.equal(lineTerminatorTokenizer("\u2029"), [Token.LineTerminator, lenOne, 1]);
});

spec12_3("base non-line-terminator validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("1"), [Token.NotFound, lenZero, 0]);
});

spec12_3("LINE FEED validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000A"), [Token.LineTerminatorSequence, lenOne, 1]);
});

spec12_3("LINE SEPARATOR validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u2028"), [Token.LineTerminatorSequence, lenOne, 1]);
});

spec12_3("PARAGRAPH SEPARATOR validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u2029"), [Token.LineTerminatorSequence, lenOne, 1]);
});

spec12_3("CARRIAGE RETURN validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000D"), [Token.MultipleVariants, lenOne, 1]);
});

spec12_3("CR + non-LF validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000D1"), [Token.LineTerminatorSequence, lenOne, 1]);
});

spec12_3("CR + LF validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000D\u000A"), [Token.LineTerminatorSequence, lenTwo, 2]);
});

spec12_3.run();
