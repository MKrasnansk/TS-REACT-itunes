import React from 'react';
import {Switch, Route} from "react-router-dom";

//styles & assets
import './App.scss';

//Components
import NavComponent from "./components/NavComponent";
import TunesComponent from "./views/TunesComponent";
import HomeComponent from "./views/HomeComponent";
import AboutComponent from "./views/AboutComponent";

function App() {
    return (
        <div className="App">
            <header>
                <NavComponent/>
                <hr/>
            </header>
            <main className="content">
                <Switch>
                    <Route path="/" component={HomeComponent} exact></Route>
                    <Route path="/tunes" component={TunesComponent}></Route>
                    <Route path="/about" component={AboutComponent}></Route>

                </Switch>

            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
