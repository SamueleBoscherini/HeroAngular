import { Component, signal, Signal } from '@angular/core';
import { HeroCardComponent } from "../hero-card-component/hero-card-component";
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/hero-service';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../models/hero.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-list',
  imports: [HeroCardComponent, CommonModule, FormsModule],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  list: Signal<Hero[]>;

  constructor(private heroService: HeroService) {
    this.list = toSignal(this.heroService.getHeroes(), { initialValue: [{ id: 1, nome: '', potere: '', completata: false }] });
  }



  get totalCompleted() {
    return this.heroService.heroes().filter(h => h.completata).length;
  }

  getheroService() {
    return this.heroService;
  }

}
