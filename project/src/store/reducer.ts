import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';
import { films } from '../mocks/films';


const initialState = {
  genre: 'All genres',
  filteredFilms: films,
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const {genre} = action.payload;
      if(action.payload) {
        state.genre = genre;
        if(genre !== 'All genres') {
          state.filteredFilms = state.films.filter((item) => item.genre === genre);
        }else {
          state.filteredFilms = films;
        }
      }
    });
});

export { reducer };
