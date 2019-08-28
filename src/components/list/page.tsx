import * as React from 'react';
import { ListModel } from '../../model';
import { ListHeader } from './ListHeader';
import { ListRow } from './ListRow';
import { Input } from '../../common/components/form';

interface Props {
  list: ListModel[];
  fetchList(): void;
}

export class ListPage extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = { list: [], search: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    return {
      [e.target.name]: e.target.value
    };
  }

  componentDidMount() {
    this.props.fetchList();
  }

  public render() {
    return (
      <div className='row'>
        <h2> Lists Page</h2>
        <div className='row'>
          <Input
            name='search'
            label='Search Text'
            value=''
            onChange={this.onChange}
          />
        </div>
        <table className='table'>
          <thead>
            <ListHeader />
          </thead>
          <tbody>
            {this.props.list.map(item => (
              <ListRow key={item._id} list={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
