import {suite} from "uvu";
import * as assert from "uvu/assert";
import {Token} from "./tokens";
import {parseWhiteSpace} from "./white-space";

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_2 = suite("Spec 12.2");

spec12_2("base non-whitespace validation", () => {
  assert.equal(parseWhiteSpace("1"), [Token.NotFound, 0]);
});

spec12_2("CHARACTER TABULATION validation", () => {
  assert.equal(parseWhiteSpace("\u0009"), [Token.WhiteSpace, 1]);
});

spec12_2("LINE TABULATION validation", () => {
  assert.equal(parseWhiteSpace("\u000B"), [Token.WhiteSpace, 1]);
});

spec12_2("FORM FEED validation", () => {
  assert.equal(parseWhiteSpace("\u000B"), [Token.WhiteSpace, 1]);
});

spec12_2("SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u0020"), [Token.WhiteSpace, 1]);
});

spec12_2("NO-BREAK SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u000B"), [Token.WhiteSpace, 1]);
});

spec12_2("ZERO WIDTH NO-BREAK SPACE validation", () => {
  assert.equal(parseWhiteSpace("\uFEFF"), [Token.WhiteSpace, 1]);
});

spec12_2("OGHAM SPACE MARK validation", () => {
  assert.equal(parseWhiteSpace("\u1680"), [Token.WhiteSpace, 1]);
});

spec12_2("EN QUAD validation", () => {
  assert.equal(parseWhiteSpace("\u2000"), [Token.WhiteSpace, 1]);
});

spec12_2("EM QUAD validation", () => {
  assert.equal(parseWhiteSpace("\u2001"), [Token.WhiteSpace, 1]);
});

spec12_2("EN SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2002"), [Token.WhiteSpace, 1]);
});

spec12_2("EM SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2003"), [Token.WhiteSpace, 1]);
});

spec12_2("THREE-PER-EM SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2004"), [Token.WhiteSpace, 1]);
});

spec12_2("FOUR-PER-EM SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2005"), [Token.WhiteSpace, 1]);
});

spec12_2("SIX-PER-EM SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2006"), [Token.WhiteSpace, 1]);
});

spec12_2("FIGURE SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2007"), [Token.WhiteSpace, 1]);
});

spec12_2("PUNCTUATION SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2008"), [Token.WhiteSpace, 1]);
});

spec12_2("THIN SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u2009"), [Token.WhiteSpace, 1]);
});

spec12_2("HAIR SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u200A"), [Token.WhiteSpace, 1]);
});

spec12_2("NARROW NO-BREAK SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u202F"), [Token.WhiteSpace, 1]);
});

spec12_2("MEDIUM MATEMATICAL SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u205F"), [Token.WhiteSpace, 1]);
});

spec12_2("IDEAOGRAPHIC SPACE validation", () => {
  assert.equal(parseWhiteSpace("\u3000"), [Token.WhiteSpace, 1]);
});

spec12_2.run();
