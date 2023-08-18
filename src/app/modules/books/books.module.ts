import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from 'src/app/components/books/books.component';
import { ShareModule } from '../share/share.module';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from 'src/app/components/add-book/add-book.component';






const bookRoute: Routes = [
  {
    path: '', component: BooksComponent
  },
  {
    path: 'book/addBook', component: AddBookComponent
  }
]


@NgModule({
  declarations: [
    BooksComponent,

  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(bookRoute)
  ]
})
export class BooksModule { }
