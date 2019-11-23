import React, { Fragment } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostList from './components/posts/PostList';

function App() {
  return (
    <Fragment>
       <PostList />
    </Fragment>
  );
}

export default App;
