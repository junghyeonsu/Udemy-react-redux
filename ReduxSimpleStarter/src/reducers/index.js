import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import Friends from './reducer_practice_friends';

import ActiveBook from './reducer_active_book';
import ActiveFrined from './reducer_active_book';

const RootReducer = combineReducers({
  book : BooksReducer,
  activeBook : ActiveBook,
  friend : Friends,
  activeFriend : ActiveFrined,
});

export default RootReducer;
