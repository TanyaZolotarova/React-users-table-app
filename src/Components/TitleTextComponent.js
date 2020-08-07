import React from 'react';
import '../App.css';


class TitleTextComponent extends React.Component {
    render() {
        const text = this.props.text;
        const textH1 = this.props.textH1;
        const textH2 = this.props.textH2;


        return (

            <div className={text}>
                <h1>{textH1}</h1>
                <h2 className="title">{textH2}</h2>

            </div>


        );


    }
}

export default TitleTextComponent;