import { Component } from '@angular/core';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.component';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <!--<h2>My favorite hero is: {{myHero.name}}</h2>
        <p>Heroes:</p>
        <ul>
            <li *ngFor='let hero of heroes'>
                {{ hero.name }}
            </li>
        </ul>
        <p *ngIf="heroes.length > 10">There are many heroes!</p>
        <click-me></click-me>
        <key-up></key-up>
        <loop-back></loop-back>
        <key-up2></key-up2>
        <key-up3></key-up3>
        <little-tour></little-tour>-->
        <hero-form></hero-form>
    `
})
export class AppComponent { 
    title = 'Tour of Heroes';
    // myHero = 'Windstorm';
    heroes = [
        new Hero(1, 'Windstorm', ''),
        new Hero(13, 'Bombasto', ''),
        new Hero(15, 'Magneta', ''),
        new Hero(20, 'Tornado', '')
    ];
    myHero = this.heroes[0];

    /**
     *
     */
    constructor() {
        // this.title = 'Tour of Heroes';
        // this.myHero = 'Windstorm';
    }
}
