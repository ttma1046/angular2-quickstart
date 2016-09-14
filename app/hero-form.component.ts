import { Component } from '@angular/core';

import { Hero } from './hero';

//import { Car } from './car/car';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})
/*
class Engine2 {
    constructor(public cylinders: number) {}
}

class Engine {}

class Tires {}

class MockEngine extends Engine { cylinders = 8;}

class MockTires extends Tires { make = 'YokoGoodStone'; }
*/
export class HeroFormComponent {
    /*
    makeCar() {
        let car = new Car(new Engine(), new Tires());

        car = new Car(new MockEngine(), new MockTires());
    }
*/
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

    model = new Hero(10, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    active = true;

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    // TODO: Remove this when we're done.
    get diagnostic() { 
        return JSON.stringify(this.model);
    }
}
