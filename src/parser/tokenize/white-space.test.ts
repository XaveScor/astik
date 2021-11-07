import {suite} from "uvu";
import * as assert from "uvu/assert";
import {isWhiteSpace} from "./white-space";

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
const spec12_2 = suite("Spec 12.2");

spec12_2("base non-whitespace validation", () => {
  assert.not.ok(isWhiteSpace("1"));
});

spec12_2("CHARACTER TABULATION validation", () => {
  assert.ok(isWhiteSpace("\u0009"));
});

spec12_2("LINE TABULATION validation", () => {
  assert.ok(isWhiteSpace("\u000B"));
});

spec12_2("FORM FEED validation", () => {
  assert.ok(isWhiteSpace("\u000B"));
});

spec12_2("SPACE validation", () => {
  assert.ok(isWhiteSpace("\u0020"));
});

spec12_2("NO-BREAK SPACE validation", () => {
  assert.ok(isWhiteSpace("\u000B"));
});

spec12_2("ZERO WIDTH NO-BREAK SPACE validation", () => {
  assert.ok(isWhiteSpace("\uFEFF"));
});

spec12_2("OGHAM SPACE MARK validation", () => {
  assert.ok(isWhiteSpace("\u1680"));
});

spec12_2("EN QUAD validation", () => {
  assert.ok(isWhiteSpace("\u2000"));
});

spec12_2("EM QUAD validation", () => {
  assert.ok(isWhiteSpace("\u2001"));
});

spec12_2("EN SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2002"));
});

spec12_2("EM SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2003"));
});

spec12_2("THREE-PER-EM SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2004"));
});

spec12_2("FOUR-PER-EM SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2005"));
});

spec12_2("SIX-PER-EM SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2006"));
});

spec12_2("FIGURE SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2007"));
});

spec12_2("PUNCTUATION SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2008"));
});

spec12_2("THIN SPACE validation", () => {
  assert.ok(isWhiteSpace("\u2009"));
});

spec12_2("HAIR SPACE validation", () => {
  assert.ok(isWhiteSpace("\u200A"));
});

spec12_2("NARROW NO-BREAK SPACE validation", () => {
  assert.ok(isWhiteSpace("\u202F"));
});

spec12_2("MEDIUM MATEMATICAL SPACE validation", () => {
  assert.ok(isWhiteSpace("\u205F"));
});

spec12_2("IDEAOGRAPHIC SPACE validation", () => {
  assert.ok(isWhiteSpace("\u3000"));
});

spec12_2.run();
