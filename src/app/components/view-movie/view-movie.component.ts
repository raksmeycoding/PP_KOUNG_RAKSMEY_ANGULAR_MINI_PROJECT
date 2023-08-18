import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent {

  moviewDetails$?: Observable<Movie>
  activeRouteSubscription?: Subscription


  constructor(private _moviewServices: BookService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeRouteSubscription = this._activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.get('id')) {
        const id: number = parseInt(paramMap.get("id") as string)
        this.moviewDetails$ = this._moviewServices.getMovieById(id)
      }
    })

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe()
    }
  }





}
