import React from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Content from './Content'

const App = () => (
  <>
    <Header text='Header'/>
    <Content />
    <Footer year={new Date().getFullYear()}/>
  </>
)

export default App
