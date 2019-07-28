import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-d">
      <div className="container">
        <a className="brand-logo">VGM</a>
        <ul className='right'>
          <li><a href='../Home'>Home</a></li>
          <li><a href='../Signup'>Signup</a></li>
          <li><a href='/About'>About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;