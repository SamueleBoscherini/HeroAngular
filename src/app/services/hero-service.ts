import { Injectable, signal } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'https://payments-cri.free.beeceptor.com/api/hero';

  private constructor(private http: HttpClient) { }

  heroes = signal<Hero[]>([]);

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
        this.heroes.set([...this.heroes(), hero]);
      },
      error: (err) => console.error('Errore nell\'aggiunta eroe', err)
    });

  }

  getSelectedHero(): Hero {
    return this.hero();
  }

  updateHero(updatedHero: Hero) {
    this.hero.set(updatedHero);
    this.heroes.set(this.heroes().map(hero => {
      if (hero.id === updatedHero.id) {
        return { ...updatedHero };
      }
      return hero;
    }));

  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl).pipe(
      tap(heroes => this.heroes.set(heroes))
    );
  }

  setHeroes() {
    const newHeroes = toSignal(this.getHeroes(), { initialValue: [] });
    this.heroes.set(newHeroes());
  }


  creaHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero);
  }
}