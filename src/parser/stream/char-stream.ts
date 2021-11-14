export class CharStream {
  #source: string;
  #id = 0;

  constructor(str: string) {
    this.#source = str;
  }

  getChar() {
    const currentSymbol = this.#source[this.#id];
    ++this.#id;
    return currentSymbol;
  }

  isClosed() {
    return this.#id >= this.#source.length;
  }
}
