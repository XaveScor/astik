import {test} from "uvu";
import * as assert from "uvu/assert";
import {tokenize} from "./tokenize";
import {Token} from "./tokens";

test("simple tokenizer", () => {
  const program = "   ";
  const tokens = tokenize(program);

  assert.equal(tokens, [Token.WhiteSpace, Token.WhiteSpace, Token.WhiteSpace]);
});

test("symbols from not first tokenizer", () => {
  const program = "\n";
  const tokens = tokenize(program);

  assert.equal(tokens, [Token.LineTerminatorSequence]);
});

test("different symbols size", () => {
  const program = " \n \r\n ";
  const tokens = tokenize(program);

  assert.equal(tokens, [
    Token.WhiteSpace,
    Token.LineTerminatorSequence,
    Token.WhiteSpace,
    Token.LineTerminatorSequence,
    Token.WhiteSpace,
  ]);
});

test.run();
