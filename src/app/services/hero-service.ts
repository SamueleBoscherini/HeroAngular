import { Injectable, signal } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes = signal<Hero[]>([
    { id: 1, nome: 'Superman', potere: 'Super forza', completata: false },
    { id: 2, nome: 'Batman', potere: 'Intelligenza', completata: false },
    { id: 3, nome: 'Flash', potere: 'Super velocità', completata: false }
  ]);

  hero = signal<Hero>({
    id: -1,
    nome: '',
    potere: '',
    completata: false
  });

  setHero(id: number) {
    this.hero.set(this.heroes().find(hero => hero.id === id) as Hero);
  }

  addHero(nome: string, potere: string) {
    const newHero: Hero = {
      id: this.heroes().length + 1,
      nome,
      potere,
      completata: false
    };
    this.heroes.update(heroes => [...heroes, newHero]);
  }

  getSelectedHero(): Hero {
    return this.hero();
  }

  updateHero(updatedHero: Hero) {
    this.heroes.set(this.heroes().map(hero => {
      if (hero.id === updatedHero.id) {
        return { ...updatedHero };
      }
      return hero;
    }));



  }
}