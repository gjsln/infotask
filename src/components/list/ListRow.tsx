import * as React from 'react';
import { ListModel } from '../../model';

interface Props {
  list: ListModel;
}

export const ListRow: React.StatelessComponent<Props> = ({ list }) => {
  return (
    <tr>
      <td>{list._id}</td>
      <td>{list.name}</td>
      <td>{list.gender}</td>
    </tr>
  );
};
