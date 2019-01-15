import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl + 'api/HeroData/GetHeroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.baseUrl + 'api/HeroData/GetHero/' + id);
  }

  saveHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.baseUrl + 'api/HeroData/SaveHero', hero);
  }
}
