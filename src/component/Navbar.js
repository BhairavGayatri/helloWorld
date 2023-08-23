import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
      {/* jb darkmode true ho or on ho tabhi navbar dark dikhna chahiye jb dark mode off ho tb white dikhna chahiye */}
      {/*backticks use kiya kyuki pure string ke andar template literal ka use kr saku  */}
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" >{props.About}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>  {/*backtics ke andar dollar lagake koi bhi variable use kr sakta hun. like {props.mode === 'light'?'dark':'light'}*/}
              <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
            </div>
          </div>
        </div>
    </nav> 
  )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string
// }
// Navbar.defaultProps = {
//     title: "set title here",
//     about: "about here",
// }