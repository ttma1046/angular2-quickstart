import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';

let expectedHeroes = [{name: 'A'}, {name: 'B'}]
let mockService = <HeroService> {getHeroes: () => expectedHeroes}

it('should have heroes when HeroListComponent created', () => {
    let hlc = new HeroListComponent(mockService);
    expect(hlc.heroes.length).toEqual(expectedHeroes.length);
});