import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostList from './components/posts/PostList';
import PostDetail from './components/posts/PostDetail';
import PostAdd from './components/posts/PostAdd';
import Info from './components/layout/Info';
import PageNotFound from './components/layout/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2">
          <Info message='Vous avez ' />
            
            <Switch>
              <Route path='/' component={PostList} exact />
              <Route path='/post/create' component={PostAdd} exact />
              <Route path='/post/:id' component={PostDetail} exact />
              <Route component={PageNotFound} />
            </Switch>
          

        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
