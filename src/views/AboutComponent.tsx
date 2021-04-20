import React from 'react';
import styles from "./about.module.scss";

const AboutComponent: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1>About page</h1>
            <p>
                Pokud jste se rozhodli začít s Reactem (nebo frontendem obecně), lehce se můžete v celém ekosystému
                nástrojů a technik ztratit. Co je příčinou?
            </p>
            <br/>
            <p>
                React byl od počátku cílen na experty a ty, kteří rádi zkoušejí nové technologie
                Facebook opensourcuje pouze věci, které sám používá a přirozeně je necílí na menší projekty
                Na internetu je spousta zavádějících React.
            </p>
        </div>
    );
};

export default AboutComponent
