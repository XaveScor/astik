import {comparePositions, concat, createPosition} from "./position";

describe("position", () => {
  describe("concat", () => {
    it("concat columns", () => {
      const pos1 = createPosition(1);
      const pos2 = createPosition(2);

      expect(concat(pos1, pos2)).toStrictEqual(createPosition(3));
    });

    it("line first", () => {
      const pos1 = createPosition(1, 1);
      const pos2 = createPosition(2);

      expect(concat(pos1, pos2)).toStrictEqual(createPosition(3, 1));
    });

    it("line last", () => {
      const pos1 = createPosition(1);
      const pos2 = createPosition(2, 1);

      expect(concat(pos1, pos2)).toStrictEqual(createPosition(2, 1));
    });

    it("multiple lines", () => {
      const pos1 = createPosition(1);
      const pos2 = createPosition(2, 1);
      const pos3 = createPosition(5, 3);

      expect(concat(pos1, pos2, pos3)).toStrictEqual(createPosition(5, 4));
    });
  });

  describe("compare", () => {
    it("equal", () => {
      const pos1 = createPosition(5, 6);
      const pos2 = createPosition(5, 6);

      expect(comparePositions(pos1, pos2)).toBe(0);
    });

    it("column more", () => {
      const pos1 = createPosition(7, 6);
      const pos2 = createPosition(5, 6);

      expect(comparePositions(pos1, pos2)).toBeGreaterThan(0);
    });

    it("column less", () => {
      const pos1 = createPosition(2, 6);
      const pos2 = createPosition(5, 6);

      expect(comparePositions(pos1, pos2)).toBeLessThan(0);
    });

    it("line more", () => {
      const pos1 = createPosition(2, 7);
      const pos2 = createPosition(5, 6);

      expect(comparePositions(pos1, pos2)).toBeGreaterThan(0);
    });

    it("line less", () => {
      const pos1 = createPosition(2, 2);
      const pos2 = createPosition(5, 6);

      expect(comparePositions(pos1, pos2)).toBeLessThan(0);
    });
  });
});
