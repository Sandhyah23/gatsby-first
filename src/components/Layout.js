import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "normalize.css"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
