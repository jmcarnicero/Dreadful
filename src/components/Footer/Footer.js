import React from "react";
import { useHistory } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { Link } from "carbon-components-react";
import './Footer.scss'

export default function Footer() {

    const history = useHistory();

    const nextPath = (path) => {
        history.push(path)
    }

    return (
        <div className="Footer">
            <img className="Footer--img-logo" src={logo} alt="Dreadful Tomato" ></img>
            <ul className="Footer--list-url">
                <li>
                    <Link href="#" onClick={() => nextPath('/')}>Home</Link>
                </li>
                <li>
                    <Link href="#">Terms of use</Link>
                </li>
                <li>
                    <Link href="#">Legal Notice</Link>
                </li>
                <li>
                    <Link href="#" >Help</Link>
                </li>
                <li>
                    <Link href="#" >Manage Account</Link>
                </li>
            </ul>

            <ul className="Footer--list-store">
                <li>
                    <Link className="Footer--list-store-apple" href="#" >AppStore</Link>
                </li>
                <li>
                    <Link className="Footer--list-store-google" href="#" >GooglePlay</Link>
                </li>
            </ul>
            <p className="Footer--list-copyright">Copyright 2020 Dreadfull Tomato Streaming. All Rights Reserved</p>
        </div>
    )
}
