import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> SimpleRecipes</span> Built with
        <a href="https://www.gatsby.com"> Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
