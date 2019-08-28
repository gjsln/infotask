import { actionTypes } from '../common/constants/actionTypes';
import { ListModel } from '../model';

export const listReducer = (state: ListModel[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_COMPLETED:
      return handleFetchListCompleted(state, action.payload);
  }

  return state;
};

const handleFetchListCompleted = (state: ListModel[], payload: ListModel[]) => {
  return payload;
};
