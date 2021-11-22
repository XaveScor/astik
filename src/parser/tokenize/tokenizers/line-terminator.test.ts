import {suite} from "uvu";
import * as assert from "uvu/assert";
import {Token} from "../tokens";
import {lineTerminatorSequenceTokenizer, lineTerminatorTokenizer} from "./line-terminator";

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_3 = suite("Spec 12.3");

spec12_3("base non-line-terminator validation", () => {
  assert.equal(lineTerminatorTokenizer("1"), [Token.NotFound, 0]);
});

spec12_3("LINE FEED validation", () => {
  assert.equal(lineTerminatorTokenizer("\u000A"), [Token.LineTerminator, 1]);
});

spec12_3("CARRIAGE RETURN validation", () => {
  assert.equal(lineTerminatorTokenizer("\u000D"), [Token.LineTerminator, 1]);
});

spec12_3("LINE SEPARATOR validation", () => {
  assert.equal(lineTerminatorTokenizer("\u2028"), [Token.LineTerminator, 1]);
});

spec12_3("PARAGRAPH SEPARATOR validation", () => {
  assert.equal(lineTerminatorTokenizer("\u2029"), [Token.LineTerminator, 1]);
});

spec12_3("base non-line-terminator validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("1"), [Token.NotFound, 0]);
});

spec12_3("LINE FEED validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000A"), [Token.LineTerminatorSequence, 1]);
});

spec12_3("LINE SEPARATOR validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u2028"), [Token.LineTerminatorSequence, 1]);
});

spec12_3("PARAGRAPH SEPARATOR validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u2029"), [Token.LineTerminatorSequence, 1]);
});

spec12_3("CARRIAGE RETURN validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000D"), [Token.MultipleVariants, 1]);
});

spec12_3("CR + non-LF validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000D1"), [Token.LineTerminatorSequence, 1]);
});

spec12_3("CR + LF validation", () => {
  assert.equal(lineTerminatorSequenceTokenizer("\u000D\u000A"), [Token.LineTerminatorSequence, 2]);
});

spec12_3.run();
