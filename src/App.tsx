import React, {useReducer} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Sample from "./pages/Sample";
import Home from "./pages/Home";
import './App.css';
import {SampleContext, SampleReducer, InitialValues} from './hooks/Store';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(SampleReducer, { year: 1, month: 1 }, InitialValues);

  return (
    <SampleContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/sample'>Sample</Link>
          <Route exact path='/' component={Home} />
          <Route path='/sample' component={Sample} />
        </div>
      </BrowserRouter>
    </SampleContext.Provider>
  );
};

export default App;
