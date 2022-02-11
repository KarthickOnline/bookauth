import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: '', component: StoryComponent },
  { path: 'story', component: StoryComponent },
  { path: 'puzzle', component: PuzzleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
