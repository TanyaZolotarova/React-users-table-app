import React from 'react';
import '../../App.css';

const TitleTextComponent: React.FC <any> = ({text, textH1, textH2}) =>{

return (

      <div className={text}>
        <h1>{textH1}</h1>
        <h2 className="title">{textH2}</h2>

      </div>

    );

}

export default TitleTextComponent;
