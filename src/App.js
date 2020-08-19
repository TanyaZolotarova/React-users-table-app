import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormRegisterComponent from './Components/FormRegisterComponent';
import LoginFormComponents from './Components/LoginFormComponents';
import HomePageComponent from './SitePageComponents/HomePageComponent';
import EditUserRowContainer from "./SitePageComponents/EdidUserRowComponent";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={FormRegisterComponent} />
        </div>
        <div className="App">
          <Route exact path="/login" component={LoginFormComponents} />
        </div>
        <Route exact path="/Home" component={HomePageComponent} />
          <Route exact path="/users/:id" component={EditUserRowContainer} />
      </Router>
    );
  }
}

export default App;
