export class CharStream {
  #source: string;
  #id = 0;

  constructor(str: string) {
    this.#source = str;
  }

  nextChar() {
    const currentSymbol = this.#source[this.#id];
    ++this.#id;
    return currentSymbol;
  }

  movePointerBack(delta: number) {
    this.#id -= delta;
  }

  isClosed() {
    return this.#id >= this.#source.length;
  }
}
