import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userLoginGuard } from './guards/user-login.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'books', loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule), canActivate: [userLoginGuard] },
  { path: 'books/:id', loadChildren: () => import("./modules/view-movie-detail/view-movie-detail.module").then(m => m.ViewMovieDetailModule) },
  { path: 'login', loadChildren: () => import("./modules/login/login.module").then(m => m.LoginModule) },
  {
    path: '', loadChildren: () => import("./modules/books/books.module").then(m => m.BooksModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
