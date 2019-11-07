import React from 'react'
import Header from './Header'
import { node } from 'prop-types'

const propTypes = { children: node }

const Layout = ({ children }) => (
  <div className='container'>
    <Header/>
    {children}
  </div>
)

Layout.propTypes = propTypes

export default Layout
