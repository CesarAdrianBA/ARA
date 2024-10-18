import React from "react";
import Styles from "./Settings.module.css";
import { NavLink } from "react-router-dom";


function Settings () {
    return (
        <div className={Styles.container}>
            <div className={Styles.botonSalir}><h3><NavLink to="/home">X</NavLink></h3></div>
            <h1 className={Styles.titleSettings}>Settings</h1>
            <ul className={Styles.lista}>
                <li><NavLink to="/settings/account">Cuenta</NavLink></li>
                <li><NavLink to="/settings/notifications">Notificaciones</NavLink></li>
                <li><NavLink to="/settings/privacy">Privacidad</NavLink></li>
                <li><NavLink to="/">Cerrar sesión</NavLink></li>
            </ul>
        </div>
    )
}

export default Settings;