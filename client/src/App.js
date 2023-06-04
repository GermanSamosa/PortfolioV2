import React from 'react';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='app'>
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
          <Route Component={NotFound} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
