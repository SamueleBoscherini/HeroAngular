import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hero} from "./models/hero.model";
import {HeroCardComponent} from "./components/hero-card-component/hero-card-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  heroes = signal<Hero[]>([
    {id: 1, nome: 'Superman', potere: 'Super forza', completata: false},
    {id: 2, nome: 'Batman', potere: 'Intelligenza', completata: false},
    {id: 3, nome: 'Flash', potere: 'Super velocità', completata: false},
  ]);


  get totalCompleted() {
    return this.heroes().filter(h => h.completata).length;
  }

  markAsDone(heroId: number) {
    const updatedHeroes = this.heroes().map(h => {
      if (h.id === heroId) {
        return {...h, completata: true};
      }
      return h;
    });
    this.heroes.set(updatedHeroes);
  }
  
}
