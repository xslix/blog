import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
// import { hot } from 'react-hot-loader';
import Post from './Post';
import PostList from './PostList';


export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Post} path="/:id" />
          <Route component={PostList} path="/" />
        </Switch>
      </Router>
    );
  }
}

// export const App = hot(module)(App_);
