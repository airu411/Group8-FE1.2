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
                        <Link to="/Baguio" className="link">Baguio</Link>
                    </li>

                    <li>
                        <Link to="/Bersabal" className="link">Bersabal</Link>
                    </li>

                    <li>
                        <Link to="/DelAyre" className="link">Del Ayre</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav