import React from 'react';
import '../App.css';
import HeaderMenuComponent from "./HeaderMenuComponent";
import TableComponent from "./TableComponent";
import {generateName, generateEmail, generateId} from "./RandomFunctions";


class HomePageComponent extends React.Component {

    state = {
        rows: this.generateRows(),
    };

    generateRows() {
        const amountOfRows = 100;
        const result = [];

        for (let i = 0; i < amountOfRows; i++) {
            result.push({
                id: generateId(),
                name1: generateName(),
                name2: generateName(),
                name3: generateName(),
                email: generateEmail(),
                uniqueId: i,
            })
        }

        return result;
    };



    render() {


        return (

            <div className={"fon_page "}>

                <HeaderMenuComponent/>

                <TableComponent rows={this.state.rows}  />



            </div>

        )

    }
}

export default HomePageComponent;