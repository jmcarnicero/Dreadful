import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from "carbon-components-react";
import './Header.scss'
export default function Header({ filterVisibility }) {
    const history = useHistory();
    const location = useLocation();

    const nextPath = (path) => {
        history.push(path)
    }

    const [show, setShow] = useState(false)
    const [showFilter, setShowFilter] = useState(false)

    useEffect(() => {
        if (location.pathname === '/') {
            setShow(false)
        } else {
            setShow(true)
        }
    }, [location.pathname])


    const isActive = path => {
        if ("/" + path === location.pathname) {
            return 'active'
        }
        return ''
    }

    const handleShowFilter = () => {
        filterVisibility(!showFilter)
        setShowFilter(!showFilter)
    }

     return (
        <div className="bx--gridbx--grid bx--grid--full-width">
            <div className="bx--row">
                <Button className="header--btn--logo" onClick={() => nextPath('/')} >Dreadful Tomato</Button>
                {show && <Button className={`header--btn--movies ${isActive('movies')}`} onClick={() => nextPath('/movies')}  >Movies</Button>}
                {show && <Button className={`header--btn--series ${isActive('series')}`} onClick={() => nextPath('/series')} >Series</Button>}
                <div className="header--btn-right">
                    {show && <Button onClick={handleShowFilter} className="header--btn--filters">Filters</Button>}
                    <Button className="header--btn--login " >Login</Button>
                    <Button className="header--btn--trial">Starts your free trial</Button>
                </div>
            </div>
        </div>
    );
}
