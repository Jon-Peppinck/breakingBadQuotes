import { Component, OnInit } from '@angular/core';
import { Interpretation } from '../../interfaces/Interpretation';
import { AllPostsService } from '../../services/all-posts.service';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  interpretations = [];
  selectedInterpretation: Interpretation = {
    firstName: '',
    lastName: '',
    quote: '',
    interpretation: ''
  };
  editState: boolean = false;
  theNumber: number = 0;

  constructor(private allPostsService: AllPostsService) {}

  ngOnInit() {
    this.interpretations = this.allPostsService.getInterpretations();
    this.getNumber();
  }
  getNumber() {
    this.interpretations.forEach(element => {
      this.theNumber++;
      let uniqueNumber = this.theNumber;
      element.uniqueNumber = uniqueNumber;
      // console.log(element);
      // return element.uniqueNumber;
    });
  }

  onSubmitQuote(thePost: Interpretation) {
    this.interpretations.unshift(thePost);
    // console.log(this.interpretations);

    // Add to LS
    localStorage.setItem(
      'interpretations',
      JSON.stringify(this.interpretations)
    );
    // get unique number
    this.theNumber = 0;
    this.getNumber();
  }
  editInterpretation(interpretation: Interpretation) {
    this.selectedInterpretation = interpretation;
    this.editState = true;
  }
  onEditedQuote(thePost: Interpretation) {
    this.interpretations.forEach((current, index) => {
      if (thePost.interpretation === current.interpretation) {
        // console.log(thePost.firstName);
        this.interpretations.splice(index, 1);
        this.interpretations.unshift(thePost);
        this.editState = false;
        this.selectedInterpretation = {
          firstName: '',
          lastName: '',
          quote: '',
          interpretation: ''
        };
      }
    });
    // Add to LS
    localStorage.setItem(
      'interpretations',
      JSON.stringify(this.interpretations)
    );
    // get unique number
    this.theNumber = 0;
    this.getNumber();
  }
  deleteInterpretation(thePost: Interpretation) {
    if (confirm('Would you like to delete this post?')) {
      this.interpretations.forEach((current, index) => {
        if (thePost.interpretation === current.interpretation) {
          this.interpretations.splice(index, 1);
        }
      });
    }
    // Add to LS
    localStorage.setItem(
      'interpretations',
      JSON.stringify(this.interpretations)
    );
    // get unique number
    this.theNumber = 0;
    this.getNumber();
  }
}
