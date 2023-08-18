import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private _fb: FormBuilder, private _bookService: BookService, private _route: Router) { }


  imageUrlAdd: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQNiE-AypNlhDglF1Id4uFGWwtcOqBgoJWTBjfxttmw-SGy96lKG-G9TqP2tqhUsrcko&usqp=CAU'
  postSubscription?: Subscription;
  getAllBookSub?: Subscription


  addBookForm: FormGroup = this._fb.group({
    title: [''],
    author: [''],
    description: [''],
    category: ['']
  })

  get title() {
    return this.addBookForm.get('title')
  }
  get author() {
    return this.addBookForm.get('author')
  }
  get description() {
    return this.addBookForm.get('description')
  }
  get category() {
    return this.addBookForm.get('category')
  }


  addNewBook() {
    let foundNextId = 0

    this._bookService.getMovies()?.subscribe(
      {
        next: (data: Movie[]) => {
          foundNextId = data.length + 1

          const addBook = {
            id: foundNextId,
            title: this.addBookForm.get('title')?.value,
            author: this.addBookForm.get('author')?.value,
            description: this.addBookForm.get('description')?.value,
            bookImage: this.imageUrlAdd,
            category: [this.addBookForm.get('category')?.value],
          }

          this.postSubscription = this._bookService.postMovie(addBook).subscribe(
            {
              next: (value) => {
                console.log(value);
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {
                console.log("Post finished");
                this._route.navigate(["/books"])
              }
            }
          )
        }
      }
    )




  }


  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(this.addBookForm);
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postSubscription?.unsubscribe()
    this.getAllBookSub?.unsubscribe()
  }

}
