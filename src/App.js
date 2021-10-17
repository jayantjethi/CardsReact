import React from 'react';
import Schedule from './Components/Schedule';
import Project from './Components/Project';
import Intro from './Components/Intro';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import LeaderBoard from './Components/LeaderBoard';
import FAQ from './Components/FAQ';
import Team from './Components/Team';
import {Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={Intro}></Route>
            <Route exact path='/schedule' component={Schedule}></Route>
            <Route exact path='/project' component={Project}></Route>
            <Route exact path='/leaderboard' component={LeaderBoard}></Route>
            <Route exact path='/faq' component={FAQ}></Route>
            <Route exact path='/team' component={Team}></Route>
          </Switch>
      <Footer />
    </div>
  );
}

export default App;
