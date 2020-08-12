import React from 'react';
import '../App.css';
import {HomeIcon, PeopleIcon, OctofaceIcon, RocketIcon, HubotIcon} from '@primer/octicons-react'


class HomePageComponent extends React.Component {



    render() {
        function tableSearch() {
            let phrase = document.getElementById('myInput');
            let table = document.getElementById('table');
            let regPhrase = new RegExp(phrase.value, 'i');
            let flag = false;
            for (let i = 1; i < table.rows.length; i++) {
                flag = false;
                for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
                    flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
                    if (flag) break;
                }
                if (flag) {
                    table.rows[i].style.display = "";
                } else {
                    table.rows[i].style.display = "none";
                }
            }
        }

        return (
            <div className={"fon_page"}>
                <header className={"container-fluid "}>

                    <div className="fixed-top">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-dark p-4">
                                <h5 className="text-white h4">Collapsed content</h5>
                                <span className="text-muted">Toggleable via the navbar brand.</span>
                            </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#collapseExample"
                                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                       role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <HubotIcon size={16} />  Мой профиль
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
                                <ul className="nav flex-column">
                                    <li className="nav-item">

                                        <a className="nav-link active" href="#"> <HomeIcon size={16}/> Главная</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active" href="#"><PeopleIcon size={16}/> Пользователи</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#"><OctofaceIcon size={16}/> Товары</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#"><RocketIcon size={16}/> Заказы</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>


                </header>


                <section className={"main-marg"}>
                    <div className={"container margin_form"}>
                        <input type="text" id="myInput" onKeyUp={tableSearch} placeholder="Search" className={"inp-style"}
                               title="Type in a name"/>
                        <table className="table table-bordered table-dark table-hover shadow" id={"table"}>
                            <thead>
                            <tr>
                                <th scope="col">#id</th>
                                <th scope="col">Login</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Фамилия</th>
                                <th scope="col">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@TwBootstrap</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>lorem@gmail.com</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
                <div className="num">

                    <nav aria-label="Page navigation example ">

                        <ul className="pagination justify-content-center ">

                            <li className="page-item disabled ">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item active "><a className="page-link active_num" href="#">1</a></li>
                            <li className="page-item"><a className="page-link num_color" href="#">2</a></li>
                            <li className="page-item"><a className="page-link num_color" href="#">3</a></li>
                            <li className="page-item"><a className="page-link num_color" href="#">4</a></li>
                            <li className="page-item"><a className="page-link num_color" href="#">5</a></li>
                            <li className="page-item"><a className="page-link num_color" href="#">Next</a></li>

                        </ul>

                    </nav>

                </div>


            </div>

        )

    }
}

export default HomePageComponent;