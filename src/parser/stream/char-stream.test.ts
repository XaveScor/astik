import {test} from "uvu";
import * as assert from "uvu/assert";
import {CharStream} from "./char-stream";

test("simple char-stream", () => {
  const stream = new CharStream(" ");
  assert.not.ok(stream.isClosed());
  assert.is(stream.nextChar(), " ");
  assert.ok(stream.isClosed());
});

test("char-stream movePointerBack", () => {
  const stream = new CharStream(" ");
  assert.is(stream.nextChar(), " ");
  assert.ok(stream.isClosed());
  stream.movePointerBack(1);
  assert.not.ok(stream.isClosed());
  assert.is(stream.nextChar(), " ");
  assert.ok(stream.isClosed());
});

test.run();
