import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                        <Link to="/Carbonell" className="link">Carbonell</Link>
                    </li>

                    <li> {/* Change to your surname  */}
                        <Link to="/Aguas" className="link">Aguas</Link>
                    </li>


                    <li>
                        <Link to="/map" className="link">Del Ayre</Link>
                    </li>

                    <li>
                        <Link to="/hooks" className="link">Baguio</Link>
                    </li>

                    <li>
                        <Link to="/hooks" className="link">Bersabal</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav