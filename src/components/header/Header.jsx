import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to='/about'>About us</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header
