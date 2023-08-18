import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/types/movie';
import { Input } from '@angular/core'

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.css']
})
export class BookcardComponent {
  @Input() movie?: Movie;
  @Output() popEvent = new EventEmitter<any>()
  @Output() deleteEvent = new EventEmitter<any>()


  editCatd() {
    this.popEvent.emit(this.movie)
  }

  deleteCard() {
    this.deleteEvent.emit(this.movie)
  }

}
