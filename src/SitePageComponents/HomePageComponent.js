import React from 'react';
import '../App.css';
import HeaderMenuComponent from './HeaderMenuComponent';
import TableComponent from './TableComponent';
import { generateName, generateEmail, generateId } from './RandomFunctions';
import { connect } from 'react-redux';
import { generateData } from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js';

class HomePageComponent extends React.Component {

  render() {
    return (

      <div className="fon_page">

        <HeaderMenuComponent />


        <TableComponent data = {this.props.generateUserRow}/>


      </div>

    );
  }
}


const mapStateToProps = state => {

    return { ...state.rows,
    };
};

export default connect(mapStateToProps, { generateData })(HomePageComponent)