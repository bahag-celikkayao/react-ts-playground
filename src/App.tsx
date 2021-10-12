import React, {FC} from 'react';
import './App.css';
import ManageTasks from './Components/ManageTasks';
import Statistics from './Components/Statistics';
import MainNavigation from './Components/layout/MainNavigation';
import { Route, Switch } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className="App">
      <MainNavigation/>
      <Switch>
        <Route path="/" exact={true}>
          <ManageTasks/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
