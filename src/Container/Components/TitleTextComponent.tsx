import * as React from 'react';
import '../../App.css';
import { ReactElement} from "react";
import {TitleTextComponentInterface} from "../TypeScript/Interfaces/TitleTextComponentInterface";




const TitleTextComponent = (props: TitleTextComponentInterface): ReactElement => {
    const {text, textH1, textH2} = props;

    return (

        <div className={text}>
            <h1>{textH1}</h1>
            <h2 className="title">{textH2}</h2>

        </div>

    );

}

export default TitleTextComponent;
