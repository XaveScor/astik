import {test} from "uvu";
import * as assert from "uvu/assert";
import {createPosition} from "./position";
import {tokenize} from "./tokenize";
import {Token} from "./tokens";

test("simple tokenizer", () => {
  const program = "   ";
  const tokens = tokenize(program);

  assert.equal(tokens, [
    {
      start: createPosition(0),
      finish: createPosition(1),
      token: Token.WhiteSpace,
      value: " ",
    },
    {
      start: createPosition(1),
      finish: createPosition(2),
      token: Token.WhiteSpace,
      value: " ",
    },
    {
      start: createPosition(2),
      finish: createPosition(3),
      token: Token.WhiteSpace,
      value: " ",
    },
  ]);
});

test("symbols from not first tokenizer", () => {
  const program = "\n";
  const tokens = tokenize(program);

  assert.equal(tokens, [
    {
      start: createPosition(0),
      finish: createPosition(1),
      token: Token.LineTerminatorSequence,
      value: "\n",
    },
  ]);
});

test("different symbols size", () => {
  const program = " \n \r\n ";
  const tokens = tokenize(program);

  assert.equal(tokens, [
    {
      start: createPosition(0),
      finish: createPosition(1),
      token: Token.WhiteSpace,
      value: " ",
    },
    {
      start: createPosition(1),
      finish: createPosition(2),
      token: Token.LineTerminatorSequence,
      value: "\n",
    },
    {
      start: createPosition(2),
      finish: createPosition(3),
      token: Token.WhiteSpace,
      value: " ",
    },
    {
      start: createPosition(3),
      finish: createPosition(5),
      token: Token.LineTerminatorSequence,
      value: "\r\n",
    },
    {
      start: createPosition(5),
      finish: createPosition(6),
      token: Token.WhiteSpace,
      value: " ",
    },
  ]);
});

test.run();
