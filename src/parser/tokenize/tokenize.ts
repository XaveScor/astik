import {CharStream} from "../stream/char-stream";
import {Token} from "./tokens";
import {parseWhiteSpace} from "./white-space";

type TokenizedDocument = ReadonlyArray<string>;

const operators = ["+", "-", "="];
function isDelimiter(ch: string): boolean {
  if (parseWhiteSpace(ch) === Token.WhiteSpace) {
    return true;
  }

  if ("0" <= ch && ch <= "9") {
    return false;
  }

  if ("a" <= ch && ch <= "z") {
    return false;
  }

  if ("A" <= ch && ch <= "Z") {
    return false;
  }

  if (operators.includes(ch)) {
    return false;
  }

  return true;
}

export function tokenize(input: string): TokenizedDocument {
  const stream = new CharStream(input);
  let tokenAcc = "";
  const res = [];
  while (!stream.isClosed()) {
    const ch = stream.getChar();
    if (isDelimiter(ch)) {
      if (tokenAcc !== "") {
        res.push(tokenAcc);
      }
      tokenAcc = "";
    } else {
      tokenAcc += ch;
    }
  }

  return res;
}
