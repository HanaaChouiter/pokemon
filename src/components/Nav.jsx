import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <>
                <ul className="nav my-2">
                    <li className="nav-item">
                        <Link className="nav-link active text-light " to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-light" to="/login">Login</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default Nav;