import {Token} from "../tokens";
import {createPosition} from "../position";
import {whiteSpaceTokenizer} from "./white-space";

const lenZero = createPosition(0);
const lenOne = createPosition(1);

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
describe("Spec 12.2", () => {
  it("base non-whitespace validation", () => {
    expect(whiteSpaceTokenizer("1")).toStrictEqual([Token.NotFound, lenZero, 0]);
  });

  it("CHARACTER TABULATION validation", () => {
    expect(whiteSpaceTokenizer("\u0009")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("LINE TABULATION validation", () => {
    expect(whiteSpaceTokenizer("\u000B")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("FORM FEED validation", () => {
    expect(whiteSpaceTokenizer("\u000B")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u0020")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("NO-BREAK SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u000B")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("ZERO WIDTH NO-BREAK SPACE validation", () => {
    expect(whiteSpaceTokenizer("\uFEFF")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("OGHAM SPACE MARK validation", () => {
    expect(whiteSpaceTokenizer("\u1680")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("EN QUAD validation", () => {
    expect(whiteSpaceTokenizer("\u2000")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("EM QUAD validation", () => {
    expect(whiteSpaceTokenizer("\u2001")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("EN SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2002")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("EM SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2003")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("THREE-PER-EM SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2004")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("FOUR-PER-EM SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2005")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("SIX-PER-EM SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2006")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("FIGURE SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2007")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("PUNCTUATION SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2008")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("THIN SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u2009")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("HAIR SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u200A")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("NARROW NO-BREAK SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u202F")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("MEDIUM MATEMATICAL SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u205F")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });

  it("IDEAOGRAPHIC SPACE validation", () => {
    expect(whiteSpaceTokenizer("\u3000")).toStrictEqual([Token.WhiteSpace, lenOne, 1]);
  });
});
