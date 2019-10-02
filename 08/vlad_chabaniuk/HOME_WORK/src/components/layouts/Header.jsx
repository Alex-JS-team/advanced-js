/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { string } from 'prop-types'

const propTypes = { text: string }

const Header = ({ text }) => (
  <header>
    <nav className='navbar navbar-light bg-dark'>
      <a className='navbar-brand text-light' href='#'>{text}</a>
    </nav>
  </header>
)

Header.propTypes = propTypes

export default Header
