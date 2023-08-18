import { Component, ViewChild } from '@angular/core';
import { SideBarRouteComponent } from '../side-bar-route/side-bar-route.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  @ViewChild(SideBarRouteComponent)
  searchValue!: SideBarRouteComponent;



  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

}
