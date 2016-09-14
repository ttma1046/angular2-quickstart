import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent {
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