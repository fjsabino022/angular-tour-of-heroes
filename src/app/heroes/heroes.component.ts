import { Component, OnInit } from '@angular/core';

// Clase exportada
import { Hero } from './../hero';

// Servicio
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private _heroService: HeroService) { }

  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero).subscribe();
  }
}
