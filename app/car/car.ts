export class Car {
    /*
    public engine: Engine;
    public tires: Tires;
    public description = 'No DI';

    constructor() {
        this.engine = new Engine();
        this.tires = new Tires();
    }
    */

    public description = 'DI';
    constructor(public engine: Engine, public tires: Tires) {}

    drive() {
        return `${this.description} car with ` + `${this.engine.cylinders} and ${this.tires.make} tires.`;
    }
}

export class Engine {
    cylinders = 0;

    constructor() {}
}

export class Tires {
    make = '';

    constructor() {}
}