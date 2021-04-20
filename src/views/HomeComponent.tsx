import React, {useState, useEffect} from 'react';


//styles & assets
import logo from "../assets/logo.svg";
import styles from "./home.module.scss";

const HomeComponent: React.FC = () => {
    const [title] = useState("React Reactive i-tunes")
    useEffect(()=> {
        document.title = title
    })
    return (
        <div className={styles.home}>
            <h1>{title}</h1>
            <img src={logo} className={styles.Applogo} alt="logo"/>

            <p>
                Proč byste měli poslouchat mě?
                Existuje spousta protichůdných rad ohledně Reactu. Proč byste měli dát zrovna na ty mé?
            </p>
            <br/>
            <p>
                Jsem jeden z původních členů Facebook týmu, který React vytvořil a opensourcoval. Před časem jsem
                však
                Facebook opustil a začal pracovat v menším startupu. Mám tak k dispozici i pohled z druhé strany
                barikády.
            </p>

        </div>
    );
};

export default HomeComponent
