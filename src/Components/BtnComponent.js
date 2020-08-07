import React from 'react';
import '../App.css';

class BtnComponent extends React.Component {
    render() {

        const btn = this.props.btn;
        const btnA = this.props.btnA;
        const btnB = this.props.btnB;
        const nameBtn = this.props.nameBtn;
        const disableB = this.props.disableB;
        const res = this.props.res;


        return (
            <div className={btn}>

                <button  className={btnA} disabled={disableB} aria-pressed="true"
                        type={'submit'}>{nameBtn}</button>

                <button  className={btnB}
                        aria-pressed="true" type={'reset'} onClick={res}>Сброс
                </button>

            </div>

        )


    }
}

export default BtnComponent;