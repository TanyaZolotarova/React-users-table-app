import React from 'react';
import '../App.css';
import HeaderMenuComponent from './HeaderMenuComponent';
import TableComponent from './TableComponent';
import { generateName, generateEmail, generateId } from './RandomFunctions';
import { connect } from 'react-redux';
import { generateData } from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js';

class HomePageComponent extends React.Component {
  // componentDidMount() {
  //   this.props.generateData(this.generateRows());
  // }
  //
  // generateRows() {
  //   const amountOfRows = 100;
  //   const result = [];
  //
  //   for (let i = 0; i < amountOfRows; i++) {
  //     result.push({
  //       id: generateId(),
  //       name1: generateName(),
  //       name2: generateName(),
  //       name3: generateName(),
  //       email: generateEmail(),
  //       uniqueId: i,
  //     });
  //   }
  //
  //   return result;
  // }

  render() {
    return (

      <div className="fon_page">

        <HeaderMenuComponent />

        <TableComponent
            data={this.props.generateUserRow}
        />

      </div>

    );
  }
}


const mapStateToProps = state => {

  return { ...state.rows,
  };
};


export default connect(mapStateToProps, { generateData })(HomePageComponent)
