import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewMovieComponent } from 'src/app/components/view-movie/view-movie.component';

const viewViewRouter: Routes = [
  { path: '', component: ViewMovieComponent }
]

@NgModule({
  declarations: [
    ViewMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(viewViewRouter)
  ]
})
export class ViewMovieDetailModule { }
