import { Engine, Tires, Car } from './car';

export class CarFactory {
    createCar() {
        let car = new Car(this.createEngine(), this.createTires());
        // injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
        // let car = injector.get(Car);

        car.description = 'Factory';

        return car;
    }

    createEngine() {
        return new Engine();
    }

    createTires() {
        return new Tires();
    }
}