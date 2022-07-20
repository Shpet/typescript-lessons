// for compile -> #tsc types

const isLoading: boolean = false;

const count: number = 35;

const message: string = 'hello';

const numberArray: Array<number> = [12, 23, 423, 42];
const stringArray: string[] = ['hello', 'world'];
const someArray: [string, number] = ['Hello', 159585];
const anyArray: Array<any> = ['234214', true, 325235];
const anyArray1: any[] = ['234214', true, 325235];

let variable = 'hello';
// variable = 13; = error

let variable1: any = 'hello';
variable1 = 13;

function hello(name: string): void {
  console.log(`Hello ${name}`);
}

hello("Vad'ka");

// Type "Never", when func is never finished
function Err(code: number, message: string): never {
  throw new Error(`${code}: ${message}`);
}

function infiniteLoading(): never {
  while (true) {}
}

// types
type ID = string | number;

const _id1: ID = 23;
const _id2: ID = '23412';

type MyType = 'Only' | 'This' | 'Value';

function getMessage(msg: MyType) {
  console.log(msg);
}

getMessage('This');
// getMessage('qwe'); error
