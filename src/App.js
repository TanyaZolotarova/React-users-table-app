import React from 'react';
import './App.css';
import FormRegisterComponent from "./Components/FormRegisterComponent";
import LoginFormComponents from "./Components/LoginFormComponents";
import HomePageComponent from "./SitePageComponents/HomePageComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends React.Component {
    render() {

        return (
            <Router>
                <div className="App">
                    <Route exact={true} path='/' component={FormRegisterComponent}/>
                </div>
                <div className="App">
                    <Route exact={true} path='/login' component={LoginFormComponents}/>
                </div>
                <Route exact={true} path='/Home' component={HomePageComponent}/>

            </Router>
        );
    }
}

export default App;
