import { Component, computed, Input, Signal, signal, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-hero-card-form',
  imports: [FormsModule],
  templateUrl: './hero-card-form.html',
  styleUrl: './hero-card-form.css',
})

export class HeroCardForm implements OnInit {
  constructor(private heroService: HeroService) { }

  nuovoHero = signal<Hero>({
    id: -1,
    nome: '',
    potere: '',
    completata: false
  });

  ngOnInit() {
    // Carica l'eroe selezionato dal servizio (se disponibile)
    const selectedHero = this.heroService.getSelectedHero();
    if (selectedHero.id !== -1) {
      // Se c'è un eroe selezionato, carica una copia
      this.nuovoHero.set({ ...selectedHero });
    } else {
      // Altrimenti reset a nuovo eroe
      this.nuovoHero.set({
        id: -1,
        nome: '',
        potere: '',
        completata: false
      });
    }
  }

  invioForm() {

    if (!this.nuovoHero().nome || !this.nuovoHero().potere) {
      console.log(this.nuovoHero());
      alert("Nome e potere sono obbligatori.");
      return;
    }

    if (this.nuovoHero().id < -1) {
      alert("Id non valido. Deve essere -1 per un nuovo eroe o un id esistente per modificare.");
      return;
    }

    if (this.nuovoHero().id === -1) {
      this.heroService.addHero(this.nuovoHero().nome, this.nuovoHero().potere);
      // Reset del form dopo l'aggiunta
      this.nuovoHero.set({
        id: -1,
        nome: '',
        potere: '',
        completata: false
      });
    } else {
      this.heroService.updateHero(this.nuovoHero());
    }

  }
}

