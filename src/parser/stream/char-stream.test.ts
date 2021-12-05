import {CharStream} from "./char-stream";

it("simple char-stream", () => {
  const stream = new CharStream(" ");
  expect(stream.isClosed()).toBeFalsy();
  expect(stream.nextChar()).toBe(" ");
  expect(stream.isClosed()).toBeTruthy();
});

it("char-stream movePointerBack", () => {
  const stream = new CharStream(" ");
  expect(stream.nextChar()).toBe(" ");
  expect(stream.isClosed()).toBeTruthy();
  stream.movePointerBack(1);
  expect(stream.isClosed()).toBeFalsy();
  expect(stream.nextChar()).toBe(" ");
  expect(stream.isClosed()).toBeTruthy();
});
