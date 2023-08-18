import { Subscription } from 'rxjs';
import { Movie } from './../../types/movie';
import { addAllMovies, addMovie } from './../../state/movie.actions';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {


  // searchByCategory
  @Input() searchCategoryVar?: string = "all"


  movies?: Movie[]
  moviesSubscription?: Subscription
  getAllBooksSubscription?: Subscription
  deleteMovieSubscrition?: Subscription


  // popupCardId:boolean
  isCardPopup: boolean = false
  popUpMovie?: Movie | null | any


  // formGroup
  popUpFormGrop: FormGroup = this._fb.group({
    title: [''],
    author: [''],
    description: ['']
  })

  constructor(
    private store: Store<{
      movies: {
        id: number;
        title: string;
        description: string;
        bookImage: string;
        author: string;
        catrogry: string[] | string
      }
    }>,
    private _bookService: BookService,
    private _fb: FormBuilder
  ) { }

  popUpCard(event: any) {
    this.isCardPopup = !this.isCardPopup
    this.popUpMovie = { ...event }
    this.popUpFormGrop = this._fb.group({
      title: [this.popUpMovie?.title],
      author: [this.popUpMovie?.author],
      description: [this.popUpMovie?.description]
    })
  }
  removePopUp() {
    this.isCardPopup = !this.popUpCard
  }

  updateMovieCard() {
    this.movies = this.movies?.map(m => {
      if (m.id === this.popUpMovie?.id) {
        m = { ...m, title: this.popUpFormGrop.get('title')?.value, author: this.popUpFormGrop.get('author')?.value, description: this.popUpFormGrop.get('description')?.value }
        this.popUpMovie = { ...m }
      }
      return m
    })

    const updatedMovie = {
      ...this.popUpMovie,
      title: this.popUpFormGrop.get('title')?.value,
      author: this.popUpFormGrop.get('author')?.value,
      description: this.popUpFormGrop.get('description')?.value
    };

    this._bookService.updateMovie(this.popUpMovie.id, updatedMovie).subscribe(
      {
        next: (data) => {

        },
        error: (err) => {

        },
        complete: () => {
          console.log("Update completed successfully");
        }
      }
    );


  }


  deleteCard(movie: Movie) {
    this.movies = this.movies?.filter(m => m.id !== movie?.id)
    this.deleteMovieSubscrition = this._bookService.deleteMovieById(movie.id)?.subscribe(
      {
        next: (value) => {
          console.log(value);
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log("Deleted completed successfully!");
        }
      }
    )
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllBooksSubscription = this._bookService.getMovies()?.subscribe(
      {
        next: (movie: Movie[]) => {
          this.store.dispatch(addAllMovies({ movie }))
        }
      }
    )

    this.moviesSubscription = this.store.select('movies').subscribe(
      {
        next: (value: any) => {
          this.movies = value
        }
      }
    )

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log(this.searchCategoryVar);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.moviesSubscription) {
      this.moviesSubscription.unsubscribe()
    }
    if (this.getAllBooksSubscription) {
      this.getAllBooksSubscription.unsubscribe()
    }
    if (this.deleteMovieSubscrition) {
      this.deleteMovieSubscrition.unsubscribe()
    }
  }
}
