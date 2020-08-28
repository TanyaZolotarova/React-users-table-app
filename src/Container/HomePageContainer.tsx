import React from 'react';
import '../App.css';
import HeaderMenuComponent from './Components/HeaderMenuComponent';
import TableComponent from './Components/TableComponent';


const HomePageContainer: React.FC = () => {


    return (

      <div className="fon_page">

        <HeaderMenuComponent />


        <TableComponent />


      </div>

    );

}


export default HomePageContainer