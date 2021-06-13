import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Todo-List/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Todo-List/">Home</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Todo-List/about">About</Link>
                        </li>
                    </ul>
                    {props.nav ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
                </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    nav: false
}

Header.propTypes = {
    title: PropTypes.string,
    nav: PropTypes.bool
}
