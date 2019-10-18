import React from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-1'>
      <Link className='navbar-brand' to='/'><strong>GitHub Repos Explorer</strong></Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <NavLink to='/browse' className='nav-item'>
            <span className='nav-link' href='#'>Browse</span>
          </NavLink>
          <NavLink to='/favorites' className='nav-item'>
            <span className='nav-link' href='#'>Favotires</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  </header>
)

export default withRouter(Header)
