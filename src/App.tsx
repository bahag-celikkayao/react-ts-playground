import React, {FC} from 'react';
import './App.css';
import ManageTasks from './Components/ManageTasks';
import Statistics from './Components/Statistics';
import Layout from './Components/layout/layout';
import { Route, Switch } from 'react-router-dom';

const App: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <ManageTasks/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
