import { Component, ViewChild } from '@angular/core';
import { Movie } from './types/movie';
import { BookService } from './services/book.service';
import { SideBarRouteComponent } from './components/side-bar-route/side-bar-route.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStateService } from './services/login-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-project';
  movieLists?: Movie[]
  @ViewChild(LoginComponent) loginCom?: LoginComponent


  constructor(private _movieService: BookService, private _loginService: LoginStateService) { }




}
