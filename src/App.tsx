import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import FormRegisterComponent from './Container/FormRegisterContainer';
import LoginFormContainer from './Container/LoginFormContainer';
import HomePageComponent from './Container/HomePageContainer';
import EditUserRowContainer from './Container/EdidUserRowContainer';
import {generateData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/helpers/users.tsx";
import {addUsersData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";
import {connect} from "react-redux";


const App: React.FC <any> = ({addUsersData}) => {

    addUsersData(
        generateData(100)
    );


    return (

      <Router>

        <div className="App">
            <Switch>
          <Route exact path="/" component={FormRegisterComponent} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/home" component={HomePageComponent}/>
          <Route exact path="/users/:id" component={EditUserRowContainer}/>
          <Route exact path="/users" component={EditUserRowContainer}/>
          <Route component={HomePageComponent}/>
            </Switch>
        </div>
      </Router>


    );

}

export default connect(null, { addUsersData })(App)
