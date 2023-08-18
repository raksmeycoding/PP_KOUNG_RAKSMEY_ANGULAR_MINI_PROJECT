import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-route',
  templateUrl: './side-bar-route.component.html',
  styleUrls: ['./side-bar-route.component.css']
})
export class SideBarRouteComponent {

  searchValue?: string;


  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log(this.searchValue);
  }

}