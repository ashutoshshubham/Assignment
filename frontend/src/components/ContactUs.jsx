import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-body">
            <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
                <div className="card" style={{ width: "50rem" }}>
                    <div className='text-center m-3'>
                        <h1 className="card-title"><b>Get In Touch</b></h1>
                    </div>

                    <div className="card-body d-flex p-0">

                        <img src="https://previews.123rf.com/images/houbacze/houbacze1607/houbacze160700066/59666305-contact-banner-contact-red-banner-contact-red-vector-banner-contact-vertical-banner-contact-design-c.jpg" alt="" width={300} className='mb-2' />

                        <div className="body-right">

                            <div className="">
                                <label className="form-label m-0" htmlFor="form12">
                                    <b>Tell Your Name</b>
                                </label>
                                <input type="text" id="form12" className="form-control mb-3" required />

                                <label className="form-label m-0" htmlFor="form12">
                                    <b>Enter Your Email</b>
                                </label>
                                <input type="email" id="form12" className="form-control mb-3" style={{ width: '30vw' }} required />

                                <label className="form-label" htmlFor="textAreaExample">
                                    <b>Your Message</b>
                                </label>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        id="textAreaExample"
                                        rows={4}
                                        defaultValue={""}
                                    />

                                </div>

                                <div className="text-center">
                                    <button type="button" class="btn btn-success mb-3">Submit</button>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default ContactUs