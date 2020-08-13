import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class BtnComponent extends React.Component {
  render() {
    const { btn } = this.props;
    const { btnA } = this.props;
    const { btnB } = this.props;
    const { nameBtn } = this.props;
    const { disableB } = this.props;
    const { res } = this.props;
    const { link } = this.props;

    return (
      <div className={btn}>

        <Link to={link}>
          <button
            className={btnA}
            disabled={disableB}
            aria-pressed="true"
            type="submit"
          >
            {nameBtn}
          </button>
        </Link>
        <button
          className={btnB}
          aria-pressed="true"
          type="reset"
          onClick={res}
        >
          Сброс
        </button>

      </div>

    );
  }
}

export default BtnComponent;
