import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../types/movie';

@Pipe({
  name: 'searchCategory'
})
export class SearchCategoryPipe implements PipeTransform {

  transform(movies: Movie[], category: string | undefined): Movie[] | any[] | any {
    if (!category || category === 'all') {
      return movies
    }
    return movies.filter(movie => movie.catrogry?.includes(category))
  }

}
