import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';
// import { DiscussionComponent } from './components/discussion/discussion.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { FourZeroFourComponent } from './components/four-zero-four/four-zero-four.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'random-quote', component: RandomQuoteComponent },
  { path: 'discussion', component: AllPostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', component: FourZeroFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
