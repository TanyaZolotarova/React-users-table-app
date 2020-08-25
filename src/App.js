import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import FormRegisterComponent from './Components/FormRegisterComponent';
import LoginFormComponents from './Components/LoginFormComponents';
import HomePageComponent from './SitePageComponents/HomePageComponent';
import EditUserRowContainer from './SitePageComponents/EdidUserRowComponent';
import {generateData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/helpers/users.js";
import {addUsersData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";
import {connect} from "react-redux";



class App extends React.Component {

    constructor (props) {
        super(props);
        this.props.addUsersData(
            generateData(100)
        );
    }

  render() {
    return (

      <Router>

        <div className="App">
            <Switch>
          <Route exact path="/" component={FormRegisterComponent} />
          <Route exact path="/login" component={LoginFormComponents} />
          <Route exact path="/home" component={HomePageComponent}/>
          <Route exact path="/users/:id" component={EditUserRowContainer}/>
          <Route exact path="/users" component={EditUserRowContainer}/>
          <Route component={HomePageComponent}/>
            </Switch>
        </div>
      </Router>


    );
  }
}

export default connect(null, { addUsersData })(App)
