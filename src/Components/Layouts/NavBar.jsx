import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";

const Navbar = () => {
    return(
        <div className={Styles.navbar}>
            <ul className={Styles.navbar__links}>
                <li className={Styles.navbar__link}><NavLink to="/home">Home</NavLink></li>
                <li className={Styles.navbar__link}><NavLink to="/fakeCall">FakeCall</NavLink></li>
                <li className={Styles.navbar__link}><NavLink to="/settings">Configuración</NavLink></li>
            </ul>
        </div>
    )

}

export default Navbar;