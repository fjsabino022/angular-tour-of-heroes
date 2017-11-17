import { Component, OnInit } from '@angular/core';

// Srervicio
import { HeroService } from './../hero.service';

// Clase
import { Hero } from './../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _heroService: HeroService) { }

  heroes: Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }
}
