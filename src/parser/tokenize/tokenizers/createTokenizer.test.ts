import {createPosition} from "../position";
import {Token} from "../tokens";
import {createTokenizer} from "./createTokenizer";

describe("createTokenizer", () => {
  it("empty string", () => {
    const tokenize = createTokenizer({
      tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
    });

    expect(tokenize("")).toStrictEqual([Token.MultipleVariants, createPosition(0), 0]);
  });

  describe("start sequense", () => {
    it("partial start sequense match", () => {
      const tokenize = createTokenizer({
        startSequence: "abcd",
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("ab")).toStrictEqual([Token.MultipleVariants, createPosition(2), 2]);
    });

    it("start sequense not match", () => {
      const tokenize = createTokenizer({
        startSequence: "abcd",
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("cd")).toStrictEqual([Token.NotFound, createPosition(0), 0]);
    });

    it("empty start sequense", () => {
      const tokenize = createTokenizer({
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("\n")).toStrictEqual([Token.LineTerminator, createPosition(1), 1]);
    });
  });

  describe("finish sequense", () => {
    it("partial finish sequense match", () => {
      const tokenize = createTokenizer({
        finishSequence: "abcd",
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("\nab")).toStrictEqual([Token.MultipleVariants, createPosition(3), 3]);
    });

    it("finish sequense not match", () => {
      const tokenize = createTokenizer({
        finishSequence: "abcd",
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("\nabd")).toStrictEqual([Token.NotFound, createPosition(0), 0]);
    });

    it("empty finish sequense", () => {
      const tokenize = createTokenizer({
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("\n")).toStrictEqual([Token.LineTerminator, createPosition(1), 1]);
    });
  });

  describe("tokenizer", () => {
    it("found tokenizer", () => {
      const tokenize = createTokenizer({
        startSequence: "a",
        finishSequence: "b",
        tokenizer: () => [Token.LineTerminator, createPosition(1), 1],
      });

      expect(tokenize("a\nb")).toStrictEqual([Token.LineTerminator, createPosition(3), 3]);
    });

    it("not found tokenizer", () => {
      const tokenize = createTokenizer({
        startSequence: "a",
        finishSequence: "b",
        tokenizer: () => [Token.NotFound, createPosition(0), 0],
      });

      expect(tokenize("axb")).toStrictEqual([Token.NotFound, createPosition(0), 0]);
    });

    it("partial found tokenizer", () => {
      const tokenize = createTokenizer({
        startSequence: "a",
        finishSequence: "b",
        tokenizer: () => [Token.MultipleVariants, createPosition(1), 1],
      });

      expect(tokenize("axbb")).toStrictEqual([Token.MultipleVariants, createPosition(2), 2]);
    });
  });
});
