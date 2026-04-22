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

}
