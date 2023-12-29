import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed-top  w-100 overflow-1 '>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand text-bold fs-2 text-primary logo" href="#"><strong><em>C</em><small className='text-decoration-underline'>oursaty</small></strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                           
                        </ul>
                        <form className="d-flex gap-3">
                            <button className="btn btn-outline-success" type="submit">S'inscrire</button>
                            <button className="btn btn-outline-success" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
