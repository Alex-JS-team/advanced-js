import React from 'react'
import { number } from 'prop-types'

const propTypes = { year: number }

const Footer = ({ year }) => (
  <footer className='footer'>
    <div className='container text-center'>
      <span className='text-muted'>
        &copy; {year} Vlad 'Semreg' Chabaniuk
      </span>
    </div>
  </footer>
)

Footer.propTypes = propTypes

export default Footer