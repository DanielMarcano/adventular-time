import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: All heroes were fetched');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero Service: The hero with id ${id} was fetched`);
    return of(HEROES.find(v => v.id === id));
  }


}
