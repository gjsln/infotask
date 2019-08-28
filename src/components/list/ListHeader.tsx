import * as React from 'react';

export const ListHeader: React.StatelessComponent<{}> = () => {
  return (
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Gender</th>
    </tr>
  );
};
