import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

class BtnComponent extends React.Component {
    render() {

        const btn = this.props.btn;
        const btnA = this.props.btnA;
        const btnB = this.props.btnB;
        const nameBtn = this.props.nameBtn;
        const disableB = this.props.disableB;
        const res = this.props.res;
        const link = this.props.link;


        return (
            <div className={btn}>
                <Link to={link}>
                    <button className={btnA} disabled={disableB} aria-pressed="true"
                            type={'submit'}>{nameBtn}</button>
                </Link>
                <button className={btnB}
                        aria-pressed="true" type={'reset'} onClick={res}>Сброс
                </button>

            </div>

        )


    }
}

export default BtnComponent;