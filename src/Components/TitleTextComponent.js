import React from 'react';
import '../App.css';

class TitleTextComponent extends React.Component {
  render() {
    const { text } = this.props;
    const { textH1 } = this.props;
    const { textH2 } = this.props;

    return (

      <div className={text}>
        <h1>{textH1}</h1>
        <h2 className="title">{textH2}</h2>

      </div>

    );
  }
}

export default TitleTextComponent;
