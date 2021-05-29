import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './pages/home/coponents/navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
