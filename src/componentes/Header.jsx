import React from 'react';
//import '../App.css';
import logo from '../logofvl.png';
import '../componentes/Estilos.css';

const Header=()=> {
    return (
        <div className=' encabezado'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logo-container">
                        <img src={logo} width="80rem" height="auto" alt="logo" className="logo" />
                    </div>
                    <div>
                        <h1>NASA API Project</h1>
                    </div>
                    <div>
                    </div>
{/**
                    <button className="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll barra" >
                            <li className="nav-item lista">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Link</a>
                            </li>
                        </ul>
                
                    </div>
 */}
                </div>
            </nav>
        </div>
    );
}

export default Header;
