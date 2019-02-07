import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quoteURL: string = 'https://breaking-bad-quote-list.herokuapp.com/quote';
  constructor(private http: HttpClient) {}

  retrieveQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.quoteURL);
  }
}
