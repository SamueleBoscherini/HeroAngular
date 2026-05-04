import { Injectable, signal } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'https://crudcrud.com/api/d54c6fb6e8254e10a2898fb4f464a366/hero';

  private constructor(private http: HttpClient) { }

  heroes = signal<Hero[]>([
    { id: 1, nome: '', potere: '', completata: false },
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
    this.creaHero(newHero).subscribe({
      next: (hero) => {
        console.log('Eroe aggiunto:', hero);
        this.heroes.set([...this.heroes(), hero]);
      },
      error: (err) => console.error('Errore nell\'aggiunta eroe', err)
    });

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

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }


  creaHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero);
  }
}