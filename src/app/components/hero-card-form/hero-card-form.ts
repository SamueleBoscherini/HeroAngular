import { Component, Input } from '@angular/core';
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
  }
}
