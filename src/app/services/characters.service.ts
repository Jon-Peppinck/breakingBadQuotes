import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  characters: Character[];

  constructor() {
    this.characters = [
      {
        firstName: 'Walter',
        lastName: 'White',
        favQuote: 'I am the one who knocks!',
        job: 'Chemistry Teacher',
        age: 50,
        address: {
          street: '308 Negra Arroyo Lane',
          city: 'Alburquerque',
          state: 'New Mexico'
        },
        isHidden: true
      },
      {
        firstName: 'Jesse',
        lastName: 'Pinkman',
        favQuote: 'Yeah, Mr. White! You really do have a plan! Yeah, science!',
        job: 'Distributor',
        age: 23,
        address: {
          street: '9808 Margo Street',
          city: 'Alburquerque',
          state: 'New Mexico'
        },
        isHidden: true
      },
      {
        firstName: 'Hank',
        lastName: 'Schrader',
        favQuote: 'I swear to Christ — I will put you under the jail.',
        job: 'DEA Agent',
        age: 43,
        address: {
          street: '4901 Cumbre Del Sur Court NE',
          city: 'Alburquerque',
          state: 'New Mexico'
        },
        isHidden: true
      },
      {
        firstName: 'Saul',
        lastName: 'Goodman',
        favQuote: "If I ever get anal polyps, I'll know what to name them.",
        job: 'Lawyer',
        age: 40,
        address: {
          street: '9800 Montgomery Blvd',
          city: 'Alburquerque',
          state: 'New Mexico'
        },
        isHidden: true
      },
      {
        firstName: 'Mike',
        lastName: 'Ehrmantraut',
        favQuote: 'No more half-measures, Walter.',
        job: 'Security Guard',
        age: 60,
        address: {
          street: '204 Edith Blvd',
          city: 'Alburquerque',
          state: 'New Mexico'
        },
        isHidden: true
      },
      {
        firstName: 'Gustavo',
        lastName: 'Fring',
        favQuote:
          'I will kill your wife, I will kill your son, I will kill your infant daughter.',
        job: 'Kingpin',
        age: 40,
        address: {
          street: '1213 Jefferson St',
          city: 'Alburquerque',
          state: 'New Mexico'
        },
        isHidden: true
      }
    ];
  }
  allChars(): Character[] {
    return this.characters;
  }
}
