import {Token} from "../tokens";
import {createPosition} from "../position";
import {lineTerminatorSequenceTokenizer, lineTerminatorTokenizer} from "./line-terminator";

const lenZero = createPosition(0);
const lenOne = createPosition(1);
const lenTwo = createPosition(2);

/**
 * https://262.ecma-international.org/12.0/#sec-white-space
 */
describe("Spec 12.3", () => {
  it("base non-line-terminator validation", () => {
    expect(lineTerminatorTokenizer("1")).toStrictEqual([Token.NotFound, lenZero, 0]);
  });

  it("LINE FEED validation", () => {
    expect(lineTerminatorTokenizer("\u000A")).toStrictEqual([Token.LineTerminator, lenOne, 1]);
  });

  it("CARRIAGE RETURN validation", () => {
    expect(lineTerminatorTokenizer("\u000D")).toStrictEqual([Token.LineTerminator, lenOne, 1]);
  });

  it("LINE SEPARATOR validation", () => {
    expect(lineTerminatorTokenizer("\u2028")).toStrictEqual([Token.LineTerminator, lenOne, 1]);
  });

  it("PARAGRAPH SEPARATOR validation", () => {
    expect(lineTerminatorTokenizer("\u2029")).toStrictEqual([Token.LineTerminator, lenOne, 1]);
  });

  it("base non-line-terminator validation", () => {
    expect(lineTerminatorSequenceTokenizer("1")).toStrictEqual([Token.NotFound, lenZero, 0]);
  });

  it("LINE FEED validation", () => {
    expect(lineTerminatorSequenceTokenizer("\u000A")).toStrictEqual([Token.LineTerminatorSequence, lenOne, 1]);
  });

  it("LINE SEPARATOR validation", () => {
    expect(lineTerminatorSequenceTokenizer("\u2028")).toStrictEqual([Token.LineTerminatorSequence, lenOne, 1]);
  });

  it("PARAGRAPH SEPARATOR validation", () => {
    expect(lineTerminatorSequenceTokenizer("\u2029")).toStrictEqual([Token.LineTerminatorSequence, lenOne, 1]);
  });

  it("CARRIAGE RETURN validation", () => {
    expect(lineTerminatorSequenceTokenizer("\u000D")).toStrictEqual([Token.MultipleVariants, lenOne, 1]);
  });

  it("CR + non-LF validation", () => {
    expect(lineTerminatorSequenceTokenizer("\u000D1")).toStrictEqual([Token.LineTerminatorSequence, lenOne, 1]);
  });

  it("CR + LF validation", () => {
    expect(lineTerminatorSequenceTokenizer("\u000D\u000A")).toStrictEqual([Token.LineTerminatorSequence, lenTwo, 2]);
  });
});
