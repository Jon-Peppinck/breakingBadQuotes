import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Interpretation } from '../../interfaces/Interpretation';
import { AllPostsService } from '../../services/all-posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  interpretations = [];
  theFirstName: any;
  theLastName: any;
  theQuote: any;
  theInterpretation: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private allPostsService: AllPostsService
  ) {}

  ngOnInit() {
    this.displayPost();
  }
  displayPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.interpretations = this.allPostsService.getInterpretations();
    let elementId = 0;
    this.interpretations.forEach(element => {
      elementId++;
      if (elementId === id) {
        this.theFirstName = element.firstName;
        this.theLastName = element.lastName;
        this.theQuote = element.quote;
        this.theInterpretation = element.interpretation;
      }
    });
  }
}
