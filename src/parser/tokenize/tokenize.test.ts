import {createPosition} from "./position";
import {tokenize} from "./tokenize";
import {Token} from "./tokens";

it("simple tokenizer", () => {
  const program = "   ";
  const tokens = tokenize(program);

  expect(tokens).toStrictEqual([
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

it("symbols from not first tokenizer", () => {
  const program = "\n";
  const tokens = tokenize(program);

  expect(tokens).toStrictEqual([
    {
      start: createPosition(0),
      finish: createPosition(1),
      token: Token.LineTerminatorSequence,
      value: "\n",
    },
  ]);
});

it("different symbols size", () => {
  const program = " \n \r\n ";
  const tokens = tokenize(program);

  expect(tokens).toStrictEqual([
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
