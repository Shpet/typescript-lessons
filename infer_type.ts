type CircleType = {
  r: number;
};

type RectangleType = {
  width: number;
  height: number;
};

const initialFigure = {
  x: 0,
  y: 0,
  color: 'black',
  figure: null as CircleType | RectangleType | null,
};

type FigureType = typeof initialFigure;

const paint = (figure: FigureType = initialFigure) => {
  figure.figure = null;
  figure.figure = {
    width: 12,
    height: 23,
  };
  figure.figure = {
    r: 12,
  };
};

// ================ || ===================
type Nullable<T> = null | T;

const initialFigure1 = {
  x: 0,
  y: 0,
  color: 'black',
  figure: null as Nullable<CircleType> | Nullable<RectangleType>,
};

type FigureType1 = typeof initialFigure;

const paint1 = (figure: FigureType = initialFigure) => {
  figure.figure = null;
  figure.figure = {
    width: 12,
    height: 23,
  };
  figure.figure = {
    r: 12,
  };
};
