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

    if (!this.nuovoHero().nome || !this.nuovoHero().potere) {
      alert("Nome e potere sono obbligatori.");
      return;
    }

    if (this.nuovoHero().id < -1) {
      alert("Id non valido. Deve essere -1 per un nuovo eroe o un id esistente per modificare.");
      return;
    }

    if (this.nuovoHero().id === -1) {
      this.heroService.addHero(this.nuovoHero().nome, this.nuovoHero().potere);
    } else {
      this.heroService.updateHero(this.nuovoHero());
    }

  }
}

