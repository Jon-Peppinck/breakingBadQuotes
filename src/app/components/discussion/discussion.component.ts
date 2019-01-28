import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
import { Character } from '../../interfaces/Character';
import { Interpretation } from '../../interfaces/Interpretation';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  @Input() selectedInterpretation: Interpretation;
  @Input() editState: boolean;
  @Output() quoteInterpretation: EventEmitter<
    Interpretation
  > = new EventEmitter();
  @Output() editQuoteInterpretation: EventEmitter<
    Interpretation
  > = new EventEmitter();
  @ViewChild('quoteForm') form: any;
  characterQuote: Character = {
    firstName: '',
    lastName: '',
    favQuote: '',
    interpretation: ''
  };

  displayForm: boolean = false;

  constructor() {}

  ngOnInit() {}

  submitQuote({ value, valid }: { value: Character; valid: boolean }) {
    if (!valid) {
      console.log('Not valid');
    } else {
      // console.log('Valid');
      this.form.reset();
    }
  }
  addQuote(firstName, lastName, quote, interpretation) {
    if (!firstName || !lastName || !quote || !interpretation) {
      alert('Please enter all fields.');
    } else {
      let thePost: Interpretation = {
        firstName,
        lastName,
        quote,
        interpretation
      };
      this.quoteInterpretation.emit(thePost);
    }
  }
  updateQuote(firstName, lastName, quote, interpretation) {
    let thePost: Interpretation = {
      firstName,
      lastName,
      quote,
      interpretation
    };
    // console.log('updated');
    this.editState = false;
    this.editQuoteInterpretation.emit(thePost);
    this.form.reset();
  }
}
