interface ICircle {
  readonly id: number;
  // not required param
  color?: string;
  radius: number;
  position: {
    x: number;
    y: number;
  };
}

const circle1: ICircle = {
  id: 0,
  radius: 5,
  position: {
    x: 0,
    y: 25,
  },
};

circle1.color = 'black';

const circle2 = {} as ICircle;
const circle3 = <ICircle>{};

// Inheritance
interface ICircleWithDiameter extends ICircle {
  getDiameter: () => number;
}

const circle4: ICircleWithDiameter = {
  id: 4,
  radius: 3,
  position: {
    x: 0,
    y: 0,
  },
  getDiameter(): number {
    return this.radius * 2;
  },
};

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// key => value
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  margin: '0px 20px 0px 40px',
  backgroundColor: 'white',
};
