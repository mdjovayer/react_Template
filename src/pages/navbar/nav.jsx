import React from 'react'
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          
        </ul>
      </nav>
  )
}
