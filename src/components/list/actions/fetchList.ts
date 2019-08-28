import { actionTypes } from '../../../common/constants/actionTypes';
import { ListModel } from '../../../model';
import { listAPI } from '../../../api/listMock';

export const fetchListAction = () => dispatch => {
  listAPI.fetchList().then(list => {
    dispatch(fetchListCompleted(list));
  });
};

const fetchListCompleted = (list: ListModel[]) => ({
  type: actionTypes.FETCH_LIST_COMPLETED,
  payload: list
});
