import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from 'src/app/components/add-book/add-book.component';
import { BookcardComponent } from 'src/app/components/bookcard/bookcard.component';
import { BooklistComponent } from 'src/app/components/booklist/booklist.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SideBarRouteComponent } from 'src/app/components/side-bar-route/side-bar-route.component';
import { SearchCategoryPipe } from 'src/app/pipes/search-category.pipe';




@NgModule({
  declarations: [
    BooklistComponent,
    BookcardComponent,
    NavbarComponent,
    FooterComponent,
    SearchCategoryPipe,
    SideBarRouteComponent,
    AddBookComponent



  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BooklistComponent,
    BookcardComponent,
    NavbarComponent,
    FooterComponent,
    SideBarRouteComponent,
    AddBookComponent



  ]
})
export class ShareModule { }
