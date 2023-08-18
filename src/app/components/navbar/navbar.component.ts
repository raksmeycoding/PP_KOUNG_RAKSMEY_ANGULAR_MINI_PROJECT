import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userlogin: boolean = false;
  stroageUserLogin: any
  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const userloginStroage = localStorage.getItem("userLogin")
    if (userloginStroage !== null) {
      this.userlogin = true
    } else {
      this.userlogin = false
    }
  }



  goToLogin() {
    this._router.navigate(['/login']);
  }
  goToAddBook() {
    this._router.navigate(['/book/addBook']);
  }

  logOut() {
    localStorage.removeItem("userLogin")
    this._router.navigate(['/login']);
  }



  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }

}
