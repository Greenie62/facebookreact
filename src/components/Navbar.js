import React from "react"
import {Link} from 'react-router-dom';


const Navbar = () =>(
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a href="#"><h1>React</h1></a>
    <ul className='navbar-nav'>
    <li className="nav-item">
    <Link to="/home" className="nav-link">Home </Link>
    </li>
    <li className="nav-item">
    <Link to="/randomprofile" className="nav-link">See Random Profile </Link>
    </li>
    <li className="nav-item">
    <Link to="/scrapesite" className="nav-link">Gimme Some Articles </Link>
    </li>
    <li className="nav-item">
    <Link to="/puppylove" className="nav-link">Must be...Puppy Love </Link>
    </li>
    <li className="nav-item">
    <Link to="/memberprofile" className="nav-link">Your Profile </Link>
    </li>
    </ul>
    </div>
)


export default Navbar;