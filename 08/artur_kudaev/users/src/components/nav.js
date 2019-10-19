import React from 'react';
import {NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink exact={true} to={{
          pathname: '/'
        }}>Home</NavLink></li>
        <li><NavLink exact={true} to='/favorite'>Favorite</NavLink></li>
      </ul>
    </nav>
  )
}