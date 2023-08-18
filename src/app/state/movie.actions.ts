import { createAction, props } from "@ngrx/store";
import { Movie } from "../types/movie";


export const addAllMovies = createAction('addAllMovies', props<{ movie: Movie[] }>())
export const addMovie = createAction('addMovie', props<Movie>())
export const updateMovie = createAction('updateMovie')
export const removeMovie = createAction('removeMovie')
