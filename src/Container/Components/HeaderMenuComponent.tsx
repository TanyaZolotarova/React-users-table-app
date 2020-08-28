import React from 'react';
import '../../App.css';
import {
  HomeIcon, HubotIcon, OctofaceIcon, PeopleIcon, RocketIcon,
} from '@primer/octicons-react';




const HeaderMenuComponent: React.FC <any>  = () => {

    return (

      <header className="container-fluid">

        <div className="fixed-top">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className={"sitebar-icons"}> <HubotIcon size={18} /> </span>

                Мой профиль
              </a>
              <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Выход</a>

              </div>
            </li>

          </nav>
        </div>
        <div className="filter_button height-100">
          <div className="collapse height-100" id="collapseExample">
            <div className="card card-body height-100 bg-dark">
              <ul className="nav ">
                <li className="nav-item">

                  <a className="nav-link active" href="#">
                   <span className={"sitebar-icons"}><HomeIcon size={16} /></span>
                    Главная
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span className={"sitebar-icons"}> <PeopleIcon size={16} /> </span>
                      Пользователи
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span className={"sitebar-icons"}>  <OctofaceIcon size={16} /> </span>
                      Товары
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span className={"sitebar-icons"}> <RocketIcon size={16} /> </span>
                      Заказы
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </header>

    );

}




export default HeaderMenuComponent;