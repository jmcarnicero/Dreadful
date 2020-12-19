import React from "react";
import { useHistory } from 'react-router-dom';

import './LandingPage.scss'
import { Button } from "carbon-components-react";


export default function LandingPage() {

    const history = useHistory();

    const nextPath = (path) => {
        history.push(path)
    }

    return (
        <div className="LandingPage">
            <Button className="LandingPage--movies" onClick={() => nextPath('/movies')} >
                <span className="LandingPage--title">Movies</span>
            </Button>
            <Button className="LandingPage--series" onClick={() => nextPath('/series')} >
                <span className="LandingPage--title">Series</span></Button>
        </div>

    );
}
