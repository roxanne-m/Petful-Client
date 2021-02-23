import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptionPage from '../AdoptionPage/AdoptionPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            
              <nav className='navigation-style'>
                <Link className='title-style' to='/'>
                  Petful FIFO
                </Link>
                <Link to='/adoption'>Adopt A Pet</Link>
              </nav>
        
            <main>
            <Switch>
              
                <Route exact path='/' component={LandingPage} />
                <Route path='/adoption' component={AdoptionPage} />
          
            </Switch>
            </main>
          </div>
        </Router>

        <footer>Roxanne Cantu, Petful FIFO 2021</footer>
      </div>
    );
  }
}

export default App;
