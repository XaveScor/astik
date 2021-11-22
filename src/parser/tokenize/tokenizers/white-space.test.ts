import {suite} from "uvu";
import * as assert from "uvu/assert";
import {Token} from "../tokens";
import {whiteSpaceTokenizer} from "./white-space";

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_2 = suite("Spec 12.2");

spec12_2("base non-whitespace validation", () => {
  assert.equal(whiteSpaceTokenizer("1"), [Token.NotFound, 0]);
});

spec12_2("CHARACTER TABULATION validation", () => {
  assert.equal(whiteSpaceTokenizer("\u0009"), [Token.WhiteSpace, 1]);
});

spec12_2("LINE TABULATION validation", () => {
  assert.equal(whiteSpaceTokenizer("\u000B"), [Token.WhiteSpace, 1]);
});

spec12_2("FORM FEED validation", () => {
  assert.equal(whiteSpaceTokenizer("\u000B"), [Token.WhiteSpace, 1]);
});

spec12_2("SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u0020"), [Token.WhiteSpace, 1]);
});

spec12_2("NO-BREAK SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u000B"), [Token.WhiteSpace, 1]);
});

spec12_2("ZERO WIDTH NO-BREAK SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\uFEFF"), [Token.WhiteSpace, 1]);
});

spec12_2("OGHAM SPACE MARK validation", () => {
  assert.equal(whiteSpaceTokenizer("\u1680"), [Token.WhiteSpace, 1]);
});

spec12_2("EN QUAD validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2000"), [Token.WhiteSpace, 1]);
});

spec12_2("EM QUAD validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2001"), [Token.WhiteSpace, 1]);
});

spec12_2("EN SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2002"), [Token.WhiteSpace, 1]);
});

spec12_2("EM SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2003"), [Token.WhiteSpace, 1]);
});

spec12_2("THREE-PER-EM SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2004"), [Token.WhiteSpace, 1]);
});

spec12_2("FOUR-PER-EM SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2005"), [Token.WhiteSpace, 1]);
});

spec12_2("SIX-PER-EM SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2006"), [Token.WhiteSpace, 1]);
});

spec12_2("FIGURE SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2007"), [Token.WhiteSpace, 1]);
});

spec12_2("PUNCTUATION SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2008"), [Token.WhiteSpace, 1]);
});

spec12_2("THIN SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u2009"), [Token.WhiteSpace, 1]);
});

spec12_2("HAIR SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u200A"), [Token.WhiteSpace, 1]);
});

spec12_2("NARROW NO-BREAK SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u202F"), [Token.WhiteSpace, 1]);
});

spec12_2("MEDIUM MATEMATICAL SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u205F"), [Token.WhiteSpace, 1]);
});

spec12_2("IDEAOGRAPHIC SPACE validation", () => {
  assert.equal(whiteSpaceTokenizer("\u3000"), [Token.WhiteSpace, 1]);
});

spec12_2.run();
