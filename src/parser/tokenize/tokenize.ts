import {Tokens} from "./tokens";
import {parseWhiteSpace} from "./white-space";

type Token = string;
type TokenizedDocument = ReadonlyArray<Token>;

const operators = ["+", "-", "="];
function isDelimiter(ch: string): boolean {
  if (parseWhiteSpace(ch) === Tokens.WhiteSpace) {
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
  let tokenAcc = "";
  const res = [];
  for (const ch of input) {
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
