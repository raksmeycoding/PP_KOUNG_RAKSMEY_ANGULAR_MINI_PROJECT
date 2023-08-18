import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { ShareModule } from '../share/share.module';



const homeRoute: Routes = [
  { path: "", component: HomePageComponent }
]

@NgModule({
  declarations: [
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(homeRoute),


  ]
})
export class HomeModule { }
