import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/">
                    <img src="https://pbs.twimg.com/profile_images/1347869339052072963/oA0oMpur.jpg" alt=" pokeball" style={{ height: "50px", width: "50px"}}/>
                </Link>
                <Link to="/berries">Berries</Link>{" "}
                <Link to="/pokemon">Pokemon</Link>{" "}
                <Link to="/locations">Locations</Link>{" "}
            </nav>
        </div>
    )
}

export default NavBar
