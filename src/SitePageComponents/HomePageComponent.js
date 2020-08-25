import React from 'react';
import '../App.css';
import HeaderMenuComponent from './HeaderMenuComponent';
import TableComponent from './TableComponent';
import { connect } from 'react-redux';
import {generateData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/helpers/users.js";
import {addUsersData, editUser}  from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js';
import {usersRawSelector} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/selectors/users.selector.js";

class HomePageComponent extends React.Component {

  render() {
    return (

      <div className="fon_page">

        <HeaderMenuComponent />


        <TableComponent />


      </div>

    );
  }
}


const mapStateToProps = state => {
    return {
        users: usersRawSelector(state),
    };
};

export default connect(mapStateToProps, { addUsersData, editUser })(HomePageComponent)