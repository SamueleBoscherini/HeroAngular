import { Component, signal } from '@angular/core';
import { Hero } from "./models/hero.model";
import { HeroCardComponent } from "./components/hero-card-component/hero-card-component";
import { HeroCardForm } from "./components/hero-card-form/hero-card-form";
import { CommonModule } from '@angular/common';
import { HeroService } from './services/hero-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HeroCardComponent, CommonModule, HeroCardForm, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private heroService: HeroService) { }

  get totalCompleted() {
    return this.heroService.heroes().filter(h => h.completata).length;
  }

  getHeroes() {
    return this.heroService.heroes();
  }

  markAsDone(heroId: number) {
    this.heroService.heroes.set(this.heroService.heroes().map(h => {
      if (h.id === heroId) {
        return { ...h, completata: true };
      }
      return h;
    }));
  }


}
