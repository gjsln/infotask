import { combineReducers } from 'redux';
import { ListModel } from '../model';
import { listReducer } from './listReducer';

export interface State {
  list: ListModel[];
}

export const state = combineReducers<State>({
  list: listReducer
});
