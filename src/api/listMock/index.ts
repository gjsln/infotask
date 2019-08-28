import { ListModel } from '../../model';
import { listData } from './mockData';

let mockList = listData;

const fetchList = (): Promise<ListModel[]> => {
  return Promise.resolve(mockList);
};

export const listAPI = {
  fetchList
};
