import {suite} from "uvu";
import * as assert from "uvu/assert";
import {Tokens} from "./tokens";
import {parseWhiteSpace} from "./white-space";

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_2 = suite("Spec 12.2");

spec12_2("base non-whitespace validation", () => {
  assert.is(parseWhiteSpace("1"), Tokens.NotFound);
});

spec12_2("CHARACTER TABULATION validation", () => {
  assert.is(parseWhiteSpace("\u0009"), Tokens.WhiteSpace);
});

spec12_2("LINE TABULATION validation", () => {
  assert.is(parseWhiteSpace("\u000B"), Tokens.WhiteSpace);
});

spec12_2("FORM FEED validation", () => {
  assert.is(parseWhiteSpace("\u000B"), Tokens.WhiteSpace);
});

spec12_2("SPACE validation", () => {
  assert.is(parseWhiteSpace("\u0020"), Tokens.WhiteSpace);
});

spec12_2("NO-BREAK SPACE validation", () => {
  assert.is(parseWhiteSpace("\u000B"), Tokens.WhiteSpace);
});

spec12_2("ZERO WIDTH NO-BREAK SPACE validation", () => {
  assert.is(parseWhiteSpace("\uFEFF"), Tokens.WhiteSpace);
});

spec12_2("OGHAM SPACE MARK validation", () => {
  assert.is(parseWhiteSpace("\u1680"), Tokens.WhiteSpace);
});

spec12_2("EN QUAD validation", () => {
  assert.is(parseWhiteSpace("\u2000"), Tokens.WhiteSpace);
});

spec12_2("EM QUAD validation", () => {
  assert.is(parseWhiteSpace("\u2001"), Tokens.WhiteSpace);
});

spec12_2("EN SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2002"), Tokens.WhiteSpace);
});

spec12_2("EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2003"), Tokens.WhiteSpace);
});

spec12_2("THREE-PER-EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2004"), Tokens.WhiteSpace);
});

spec12_2("FOUR-PER-EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2005"), Tokens.WhiteSpace);
});

spec12_2("SIX-PER-EM SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2006"), Tokens.WhiteSpace);
});

spec12_2("FIGURE SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2007"), Tokens.WhiteSpace);
});

spec12_2("PUNCTUATION SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2008"), Tokens.WhiteSpace);
});

spec12_2("THIN SPACE validation", () => {
  assert.is(parseWhiteSpace("\u2009"), Tokens.WhiteSpace);
});

spec12_2("HAIR SPACE validation", () => {
  assert.is(parseWhiteSpace("\u200A"), Tokens.WhiteSpace);
});

spec12_2("NARROW NO-BREAK SPACE validation", () => {
  assert.is(parseWhiteSpace("\u202F"), Tokens.WhiteSpace);
});

spec12_2("MEDIUM MATEMATICAL SPACE validation", () => {
  assert.is(parseWhiteSpace("\u205F"), Tokens.WhiteSpace);
});

spec12_2("IDEAOGRAPHIC SPACE validation", () => {
  assert.is(parseWhiteSpace("\u3000"), Tokens.WhiteSpace);
});

spec12_2.run();
