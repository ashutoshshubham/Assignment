import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='Home-background' style={{ height: '90vh' }}>
            <div className="container">
                <div className="row">
                    <div className="text-center text-light" style={{ marginTop: '12vh' }}>

                        <h1 className='' style={{ fontSize: '70px' }}>One Page Bootstrap<br></br> Website Templet</h1>
                        <h3>We are team of talented designers</h3>
                        <Link to='/signup'><button type="button" className="btn btn-light btn-rounded mt-3"><b>Get Started</b></button></Link>

                    </div>
                </div>
                <div className="row">
                    {/* <div className='d-flex' style={{ marginTop: '10vh' }}> */}
                    <div className='d-flex' style={{ marginTop: '10vh' }}>

                        <div className="col-md-3">
                            <div class="card mx-2">
                                <div class="card-body">
                                    <h5 class="card-title">Lorem, ipsum dolor.</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita eos? Vitae officiis porro, reprehenderit ex accusantium nisi voluptatem ipsum?</p>
                                </div>
                            </div>
                        </div>

                        <div class="card mx-2">
                            <div class="card-body">
                                <h5 class="card-title">Lorem, ipsum dolor.</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita eos? Vitae officiis porro, reprehenderit ex accusantium nisi voluptatem ipsum?</p>
                            </div>
                        </div>

                        <div class="card mx-2">
                            <div class="card-body">
                                <h5 class="card-title">Lorem, ipsum dolor.</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita eos? Vitae officiis porro, reprehenderit ex accusantium nisi voluptatem ipsum?</p>
                            </div>
                        </div>

                        <div class="card mx-2">
                            <div class="card-body">
                                <h5 class="card-title">Lorem, ipsum dolor.</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, expedita eos? Vitae officiis porro, reprehenderit ex accusantium nisi voluptatem ipsum?</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home