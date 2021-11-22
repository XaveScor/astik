export type Position = {
  line: number;
  column: number;
};

export function createPosition(column: number, line = 0): Position {
  return {
    line,
    column,
  };
}

export function comparePositions(pos1: Position, pos2: Position) {
  const lineDiff = pos1.line - pos2.line;
  if (lineDiff !== 0) {
    return lineDiff;
  }

  return pos1.column - pos2.column;
}

export function concat(pos1: Position, pos2: Position): Position {
  if (pos2.line === 0) {
    return {
      line: pos1.line,
      column: pos2.column + pos1.column,
    };
  }

  return {
    line: pos1.line + pos2.line,
    column: pos2.column,
  };
}
