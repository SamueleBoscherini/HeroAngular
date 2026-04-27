import { Component, signal, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from "../../models/hero.model";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-card-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-card-component.html',
  styleUrl: './hero-card-component.css',
})
export class HeroCardComponent {
  @Input() hero!: Hero;

  constructor(private heroService: HeroService) { }

  markAsDone() {
    this.heroService.heroes.set(this.heroService.heroes().map(h => {
      if (h.id === this.hero.id) {
        return { ...h, completata: true };
      }
      return h;
    }));
  }

  selectHero() {
    this.heroService.setHero(this.hero.id);
  }
}
