import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ListPageContainer } from './components';
import { Provider } from 'react-redux';
import { store } from './store';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <Route exact path='/' component={ListPageContainer} />
        </div>
      </Router>
    </Provider>
  );
};
