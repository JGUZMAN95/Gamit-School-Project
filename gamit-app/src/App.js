
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import Contact from './pages/Contact';
import ViewPost from './pages/ViewPost';
import Account from './pages/Account';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Home' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/CreatePost' component={CreatePost} />
        <Route path='/Contact' component={Contact} />
        <Route path='/ViewPost' component={ViewPost} />
        <Route path='/Account' component={Account} />
        <Route path='/Profile' component={Profile} />
        <Route path ='/Signup' exact component={Signup} />
      </Switch>
    
    </Router>
  );
}

export default App;