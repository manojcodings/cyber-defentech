import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-link">
        <img src={logo} alt="CyberDefentech — Home" className="logo" />
      </NavLink>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/enquiry">Enquiry</NavLink></li>
      </ul>

      <div className="nav-controls">
        <SearchBar />
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar