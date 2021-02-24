import React from 'react'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Profile from './views/Profile';
import Products from './views/Products';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './views/Dashboard'

function App() {

  React.useEffect(()=>{
    axios.get("http://localhost:4000/").then((res)=>console.log("res", res))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/auth/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
