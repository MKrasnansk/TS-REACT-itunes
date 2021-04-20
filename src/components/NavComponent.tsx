import React from 'react';
import { NavLink} from "react-router-dom";

//styles & assets
import"./nav.scss"
interface Props {
    
}
const NavComponent: React.FC<Props> = () => {
    return (
            <nav className="navigation">
                <NavLink to="/" exact >Home</NavLink>
                <NavLink to="/tunes">Tunes</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
    );
};

export default NavComponent;
