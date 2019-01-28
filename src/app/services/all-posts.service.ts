import { Injectable } from '@angular/core';
import { Interpretation } from '../interfaces/Interpretation';

@Injectable({
  providedIn: 'root'
})
export class AllPostsService {
  interpretations = [];
  constructor() {
    this.getInterpretations();
  }
  getInterpretations() {
    if (localStorage.getItem('interpretations') === null) {
      this.interpretations = [];
    } else {
      this.interpretations = JSON.parse(
        localStorage.getItem('interpretations')
      );
    }
    return this.interpretations;
  }
}
