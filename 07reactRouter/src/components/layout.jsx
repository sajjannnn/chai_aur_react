import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'

function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout   