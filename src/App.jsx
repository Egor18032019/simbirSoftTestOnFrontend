import logo from './logo.svg';
import './App.css';
import {Switch, Route, Router} from "react-router-dom";
import { AppRoute } from "./const";
import history from "./history";

import ListOfLeagues from "./ListOfLeagues.jsx"
import ListOfTeams from "./ListOfTeams.jsx"
import Main from "./Main.jsx"
import QualificationLeague from "./QualificationLeague.jsx"
import CalendarOneLeague from "./CalendarOneLeague.jsx"
import CalendarOneTeam from "./CalendarOneTeam.jsx"
 function App() {
 
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
      
    <Router
      history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main/>
          </Route>
          <Route exact path={AppRoute.LEAGUES}>
          <ListOfLeagues/>
          </Route>
          <Route exact path={AppRoute.INLEAGUE}>
          <ListOfTeams/>
          </Route>
          <Route exact path={AppRoute.TEAMS}>
          <CalendarOneTeam/>
          </Route>
          <Route exact path={AppRoute.QUALIFICATION}>
          <QualificationLeague/>
          </Route>
        </Switch>
        </Router >
    </div>
  );
}

export default App;
