interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(_x: number): MyPositionWithDefault;
function position(_x: number, _y: number): MyPosition;

function position(_x?: number, _y?: number) {
  if (_x === undefined && _y === undefined) {
    return { x: undefined, y: undefined };
  }

  if (_x !== undefined && _y === undefined) {
    return { x: _x, y: undefined, default: _x.toString() };
  }

  return { x: _x, y: _y };
}

console.log('0param', position());
console.log('1param', position(2));
console.log('2params', position(1, 3));
