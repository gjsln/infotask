import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchListAction } from './actions/fetchList';
import { ListPage } from './page';

const mapStateToProps = (state: State) => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchListAction())
});

export const ListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage);
