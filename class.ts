class Car {
  readonly model: string;
  gasAmount: number = 1000;

  constructor(_model: string) {
    this.model = _model;
  }

  burnGasAmount(_amount: number): void {
    this.gasAmount -= _amount;
  }
}

// these classes are same

class Car2 {
  gasAmount: number = 1000;

  constructor(readonly model: string) {}

  burnGasAmount(_amount: number): void {
    this.gasAmount -= _amount;
  }
}

// ____________________

// Modifiers - private, protected, public
// public - default

class Animal {
  protected voice: string = '';
  public color: string = '';

  constructor() {
    this.go();
  }

  private go(): void {
    console.log('go');
  }
}

class Cat extends Animal {
  public setVoice(_voice: string): string {
    return (this.voice = _voice);
  }
}

const cat = new Cat();
// cat.voice; it doesn't work, becouse protected modifier is not for instance;
console.log(cat.setVoice('meow'));
cat.color = 'red';
