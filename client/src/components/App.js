import React from 'react';
//import router
import {Route, Router, Switch} from 'react-router-dom';
//import components
import NoteCreate from './notes/NoteCreate';
import NoteEdit from './notes/NoteEdit';
import NoteDelete from './notes/NoteDelete';
import NoteList from './notes/NoteList';
import NoteShow from './notes/NoteShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={NoteList} />
            <Route path="/notes/new" exact component={NoteCreate} />
            <Route path="/notes/edit/:id" exact component={NoteEdit} />
            <Route path="/notes/delete/:id" exact component={NoteDelete} />
            <Route path="/notes/:id" exact component={NoteShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;