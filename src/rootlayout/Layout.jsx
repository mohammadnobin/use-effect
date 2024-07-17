import React from 'react'
import { ScrollRestoration } from "react-router-dom";
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from '../components/Fotter'
import Header from '../components/Header'
import BacktoTop from '../components/BacktoTop';

const Layout = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Outlet />
    <ScrollRestoration />
    <Fotter />
    <BacktoTop />
    </>
  )
}

export default Layout