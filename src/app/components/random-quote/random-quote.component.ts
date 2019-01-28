import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/Character';
import { CharactersService } from '../../services/characters.service';
import { Quote } from '../../interfaces/Quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  characters: Character[];
  quote: Quote;
  hasLoaded: boolean;

  constructor(
    private charService: CharactersService,
    private quoteService: QuoteService
  ) {}

  ngOnInit() {
    this.characters = this.charService.allChars();
    this.hasLoaded = false;
    this.quoteService.retrieveQuote().subscribe(quote => {
      this.quote = quote;
      this.hasLoaded = true;
    });
  }
  callRetrieveQuote() {
    this.hasLoaded = false;
    this.quoteService.retrieveQuote().subscribe(quote => {
      this.quote = quote;
      this.hasLoaded = true;
    });
  }
}
