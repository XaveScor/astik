import {suite} from "uvu";
import * as assert from "uvu/assert";
import {Token} from "./tokens";
import {parseWhiteSpace} from "./white-space";

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_2 = suite("Spec 12.2");

spec12_2("base non-whitespace validation", () => {
  assert.is(parseWhiteSpace("1"), Token.NotFound);
});

spec12_2("CHARACTER TABULATION validation", () => {
  assert.is(parseWhiteSpace("\u0009"), Token.WhiteSpace);
});

spec12_2("LINE TABULATION validation", () => {
  assert.is(parseWhiteSpace("\u000B"), Token.WhiteSpace);
});

spec12_2("FORM FEED validation", () => {
  assert.is(parseWhiteSpace("\u000B"), Token.WhiteSpace);
});

spec12_2("SPACE validation", () => {
  assert.is(parseWhiteSpace("\u0020"), Token.WhiteSpace);
});

spec12_2("NO-BREAK SPACE validation", () => {
  assert.is(parseWhiteSpace("\u000B"), Token.WhiteSpace);
});

spec12_2("ZERO WIDTH NO-BREAK SPACE validation", () => {
  assert.is(parseWhiteSpace("\uFEFF"), Token.WhiteSpace);
});

spec12_2("OGHAM SPACE MARK validation", () => {
  assert.is(parseWhiteSpace("\u1680"), Token.WhiteSpace);
});

spec12_2("EN QUAD validation", () => {
  assert.is(parseWhiteSpace("\u2000"), Token.WhiteSpace);
});

spec12_2("EM QUAD validation", () => {
  assert.is(parseWhiteSpace("\u2001"), Token.WhiteSpace);
});

spec12_2("EN SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2002"), Token.WhiteSpace);
});

spec12_2("EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2003"), Token.WhiteSpace);
});

spec12_2("THREE-PER-EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2004"), Token.WhiteSpace);
});

spec12_2("FOUR-PER-EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2005"), Token.WhiteSpace);
});

spec12_2("SIX-PER-EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2006"), Token.WhiteSpace);
});

spec12_2("FIGURE SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2007"), Token.WhiteSpace);
});

spec12_2("PUNCTUATION SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2008"), Token.WhiteSpace);
});

spec12_2("THIN SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2009"), Token.WhiteSpace);
});

spec12_2("HAIR SPACE validation", () => {
  assert.is(parseWhiteSpace("\u200A"), Token.WhiteSpace);
});

spec12_2("NARROW NO-BREAK SPACE validation", () => {
  assert.is(parseWhiteSpace("\u202F"), Token.WhiteSpace);
});

spec12_2("MEDIUM MATEMATICAL SPACE validation", () => {
  assert.is(parseWhiteSpace("\u205F"), Token.WhiteSpace);
});

spec12_2("IDEAOGRAPHIC SPACE validation", () => {
  assert.is(parseWhiteSpace("\u3000"), Token.WhiteSpace);
});

spec12_2.run();
