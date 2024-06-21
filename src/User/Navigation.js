import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
    <div className='container p-1'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >HDC BLOG</a>
            <Link to="/" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    {/* <a  onClick={()=>Navigate(1)} >Home<span className="sr-only">(current)</span></a> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/userlist">User List <span className="sr-only"></span></Link>
                    {/* <a className="nav-link" onClick={()=>Navigate(2)} >User List</a> */}
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/login">Login</Link>
                    {/* <a className="nav-link"  onClick={()=>Navigate(3)}>Login</a> */}
                </li>
                <li className="nav-item">
                   <Link className='nav-link' to="/userregistration">User Registration</Link>
                    {/* <a className="nav-link disabled" onClick={()=>Navigate(4)}>User Registration</a> */}
                </li>
                <li className="nav-item">
                   <Link className='nav-link' to="/category">Category</Link>
                    {/* <a className="nav-link disabled" onClick={()=>Navigate(4)}>User Registration</a> */}
                </li>
                </ul>
            </div>
       </nav>
       </div>
    </>
  )
}

export default Navigation