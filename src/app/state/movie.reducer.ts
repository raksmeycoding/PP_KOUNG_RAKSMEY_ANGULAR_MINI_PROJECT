import { Movie } from './../types/movie';
import { createReducer, on } from '@ngrx/store'
import { initialState } from '../state/movie.state'
import { addAllMovies, addMovie } from "./movie.actions";
import { TypedAction } from "@ngrx/store/src/models";


const _movieReducer = createReducer(
  initialState,
  on(addMovie, (state, action) => {
    console.log(action)
    return [...state, action]; // Add the new movie to the state array
  }),
  on(addAllMovies, (state, action) => {
    return [...action.movie];
  })
);

export function movieReducer(state: any, action: any) {
  return _movieReducer(state, action);
}


