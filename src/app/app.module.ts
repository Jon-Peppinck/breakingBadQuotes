import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';

import { CharactersService } from './services/characters.service';
import { QuoteService } from './services/quote.service';
import { AllPostsService } from './services/all-posts.service';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    RandomQuoteComponent,
    DiscussionComponent,
    AllPostsComponent,
    PostComponent,
    FourZeroFourComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CharactersService, QuoteService, AllPostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
