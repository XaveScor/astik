import {test} from "uvu";
import * as assert from "uvu/assert";
import {tokenize} from "./tokenize";
import {Token} from "./tokens";

test("simple tokenizer", () => {
  const program = "   ";
  const tokens = tokenize(program);

  assert.equal(tokens, [Token.WhiteSpace, Token.WhiteSpace, Token.WhiteSpace]);
});

test.run();
