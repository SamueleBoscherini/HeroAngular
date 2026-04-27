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

<<<<<<< HEAD
  constructor(private heroService: HeroService) { }

  nuovoHero: Signal<Hero> = computed(() => this.heroService.getSelectedHero());

  invioForm() {
    if (this.nuovoHero().id === -1) {
      this.heroService.addHero(this.nuovoHero().nome, this.nuovoHero().potere);
    } else {
      this.heroService.updateHero(this.nuovoHero());
    }

=======
  nuovoEroe : Hero = {
  id: 0,
  nome: '',
  potere: '',
  completata: false
  };

  constructor(private heroService: HeroService){}

  addHero(){
    if(this.nuovoEroe.id !== -1 || this.nuovoEroe.nome.trim() === '' || this.nuovoEroe.potere.trim() === '') {
      alert('Per favore, compila tutti i campi correttamente.');
      return;
    }
    this.nuovoEroe.id = this.heroService.heroes().length + 1;
    this.heroService.heroes.update(heroes => [...heroes, this.nuovoEroe])
>>>>>>> 73b0e7303cfc148a973f23081d2f605c7b268ece
  }
}
