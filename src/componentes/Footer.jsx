import React from 'react';
//import '../App.css';
import logo from '../logofvl.png';
import '../componentes/Estilos.css';

const Footer=()=> {
    return (

                <div className="footer ">

                    <div className="copyright py-5">
                        <div className="">
                            <div className="container-fluid">
                                <div >
                                    <p>© 2023 All Rights Reserved.</p>
                                </div>
                                <div className="logo-container ">
                                    <img src={logo} width="80rem" height="auto" alt="logo" className="logo" />
                                </div>
                                <div >
                                    <p>Fabiola Victoria Lera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


    );
}

export default Footer;