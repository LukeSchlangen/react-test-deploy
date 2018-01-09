import React, { Component } from 'react';
import './App.css';

// import route Components here
import Hello from '../HelloComponent/HelloComponent';
import About from '../AboutComponent/AboutComponent';
import Books from '../BooksComponent/BooksComponent';

import {
  BrowserRouter as Router,
  Route,
  Link,
  // Switch,
  // Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <ul>
                <li><Link to="/hello">Hello</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
              </ul>
            </ul>
            <hr />
            <Route path="/hello" component={Hello} />
            <Route path="/about" component={About} />
            <Route path="/books" component={Books} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
