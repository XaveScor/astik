import {Token} from "./tokens";

/**
 * spec: https://262.ecma-international.org/12.0/#sec-white-space
 */
const CHARACTER_TABULATION = "\u0009";
const LINE_TABULATION = "\u000B";
const FORM_FEED = "\u000C";
const SPACE = "\u0020";
const NO_BREAK_SPACE = "\u00A0";
const ZERO_WIDTH_NO_BREAK_SPACE = "\uFEFF";
/**
 * Zs characters
 * https://www.compart.com/en/unicode/category/Zs
 */
const OGHAM_SPACE_MARK = "\u1680";
function is200XRange(ch: string): boolean {
  return "\u2000" <= ch && ch <= "\u200A";
}
const NARROW_NO_BREAK_SPACE = "\u202F";
const MEDIUM_MATHEMATICAL_SPACE = "\u205F";
const IDEOGRAPHIC_SPACE = "\u3000";

const whiteSpaceList = [
  CHARACTER_TABULATION,
  LINE_TABULATION,
  FORM_FEED,
  SPACE,
  NO_BREAK_SPACE,
  ZERO_WIDTH_NO_BREAK_SPACE,
  OGHAM_SPACE_MARK,
  NARROW_NO_BREAK_SPACE,
  MEDIUM_MATHEMATICAL_SPACE,
  IDEOGRAPHIC_SPACE,
];

export function parseWhiteSpace(ch: string): Token {
  return is200XRange(ch) || whiteSpaceList.some((ws) => ws === ch) ? Token.WhiteSpace : Token.NotFound;
}
