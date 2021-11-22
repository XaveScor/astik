import {Token} from "./tokens";

type TokenLen = number;
export type Tokenizer = (chars: string) => [Token, TokenLen];
