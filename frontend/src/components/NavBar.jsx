import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <Link className="navbar-brand" to="homepage">
                        <img src="https://cdn-icons-png.flaticon.com/512/2132/2132217.png" alt="" width={50} />
                    </Link>

                    <div>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                            <div className="navbar-nav">

                                <Link className="nav-link active" aria-current="page" to="/homepage">
                                    Home
                                </Link>
                                <Link className="nav-link active" aria-current="page" to="/login">
                                    Login
                                </Link>
                                <Link className="nav-link active" aria-current="page" to="/signup">
                                    SignUp
                                </Link>
                                <Link className="nav-link active" aria-current="page" to="/contactus">
                                    ContactUs
                                </Link>
                                <Link className="nav-link active" aria-current="page" to="/aboutus">
                                    AboutUs
                                </Link>
                                {/* <Link className="nav-link active" aria-current="page" to="/user">
                                    User
                                </Link>
                                <Link className="nav-link active" aria-current="page" to="/setup">
                                    ProfileSetup
                                </Link> */}

                            </div>

                        </div>

                    </div>

                </div>


            </nav>

        </div>
    )
}

export default NavBar