import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {

    return (
        <div>
          
            <div className="secondNav">
                <div>
                    <Link className="link"to="/buzz">
                        Buzz
                    </Link>
                    <Link className="link"to="/entertainment-buzz">
                        Entertainment
                    </Link>
                    <Link className="link"to="/general-buzz">
                        General
                    </Link>
                    <Link className="link"to="/sports-buzz">
                        Sports
                    </Link>
                    <Link className="link"to="/trending-buzz">
                        Trending
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default NavBar
