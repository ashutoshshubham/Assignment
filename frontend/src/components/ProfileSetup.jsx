import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSetup = () => {
    return (
        <div>

            <div className="container">

                <div className="row">
                    <div className="card border border-secondary mt-5">
                        <div className="card-body text-center m-3">

                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-circle d-block mx-auto mb-4"
                                style={{ width: 150 }}
                            />

                            <button type="button" className="btn btn-outline-success btn-rounded"><b>Change Profile Picture</b></button>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="card border border-secondary mt-5" style={{ height: '65vh' }}>
                        <div className="card-body">
                            <h1 className="card-title text-center">User Info</h1>
                            <form action="">

                                <label htmlFor="" style={{ fontSize: '20px' }}>Full Name</label>
                                <input type="text" className='form-control mb-3' name='name' />

                                <label htmlFor="" style={{ fontSize: '20px' }}>Contact</label>
                                <input type="number" className='form-control mb-3' name='contact' />

                                <label htmlFor="" style={{ fontSize: '20px' }}>Address</label>
                                <textarea className="form-control mb-3" id="textAreaExample" rows="4" name='address'></textarea>

                                <div className="text-center">
                                    <Link to='/user'>
                                        <button type="submit" class="btn btn-success btn-rounded" data-mdb-ripple-color="dark"><b>Submit</b></button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileSetup