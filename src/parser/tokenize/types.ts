import {Position} from "./position";
import {Token} from "./tokens";

export type DocumentNode = {
  start: Position;
  finish: Position;
  value: string;
  token: Token;
};
type TokenLen = number;
export type TokenizedDocument = ReadonlyArray<DocumentNode>;
export type Tokenizer = (chars: string) => [Token, Position, TokenLen];
