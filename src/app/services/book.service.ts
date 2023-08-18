import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie } from '../types/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private moveUrl = 'api/movies'


  constructor(private _httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> | undefined {
    return this._httpClient.get<Movie[]>(this.moveUrl)
  }


  getMovieById(id: number): Observable<Movie> | undefined {
    const url = `${this.moveUrl}/${id}`
    return this._httpClient.get<Movie>(url)
  }


  deleteMovieById(id: number): Observable<Movie | undefined> {
    const url = `${this.moveUrl}/${id}`
    return this._httpClient.delete<Movie>(url)
  }

  updateMovie(id: number, movie: Movie): Observable<Movie | undefined | any> {
    const url = `${this.moveUrl}/${id}`;
    // const body = JSON.stringify(movie);

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json', // Set the content type header
    // });

    return this._httpClient.put<any>(url, movie)
  }


  postMovie(mive: any): Observable<any> {
    return this._httpClient.post<any>(this.moveUrl, mive)
  }
}
