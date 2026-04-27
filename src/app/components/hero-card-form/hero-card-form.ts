import { Component, computed, Input, Signal, signal } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-card-form',
  imports: [FormsModule],
  templateUrl: './hero-card-form.html',
  styleUrl: './hero-card-form.css',
})
export class HeroCardForm {

  constructor(private heroService: HeroService) { }

  nuovoHero: Signal<Hero> = computed(() => this.heroService.getSelectedHero());

  invioForm() {
    if (this.nuovoHero().id === -1) {
      this.heroService.addHero(this.nuovoHero().nome, this.nuovoHero().potere);
    } else {
      this.heroService.updateHero(this.nuovoHero());
    }

  }
}
