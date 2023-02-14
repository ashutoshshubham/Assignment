import React from 'react'
import { Formik } from "formik"
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
import './Login.css'


const Login = () => {

    const navigate = useNavigate();

    const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
        console.log(formdata)
        resetForm()
        setSubmitting(true)

        const res = await fetch('http://localhost:8000/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login Successful'
            })
            navigate('/user');
        }
        else if (res.status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email or Password is incorrect'
            })
        }
        else {
            Swal.fire({
                iicon: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }

        setTimeout(() => {
            setSubmitting(false)
        }, 2000)
    }

    return (

        // <div className='login-body'>

        //     <div className='d-flex align-items-center justify-content-center'style={{ height: '90vh' }}>

        //         <div className="col-md-3 col-sm-4 mx-auto">

        //             <div className="card mt-5">
        //                 <div className="card-header bg-danger">
        //                     <p className="text-center text-white m-0 h4">Login Now</p>
        //                 </div>
        //                 <div className="card-body">



        // <Formik
        //     initialValues={{ email: "", password: "" }}
        //     onSubmit={loginSubmit}>
        //     {({ values, handleSubmit, handleChange, isSubmitting }) => (
        //         <form onSubmit={handleSubmit}>
        //             <label>Email Address</label>
        //             <input required type="email" className="form-control mb-3" value={values.email} name="email" onChange={handleChange} />

        //             <label>Password</label>
        //             <input required type="password" className="form-control mb-3" value={values.password} name="password" onChange={handleChange} />

        //             <Link to="/" className="mt-5">
        //                 Forgot Password
        //             </Link>

        //             <button type="submit" className="btn btn-danger w-100 mb-4">
        //                 {isSubmitting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
        //             </button>
        //         </form>
        //     )}
        // </Formik>

        //                 </div>

        //                 <div className="card-footer">
        //                     <p className="text-center m-0">
        //                         Don't have an account? <Link className='' to="/signup">Register Now</Link>
        //                     </p>
        //                 </div>

        //             </div>

        //         </div>
        //     </div>

        // </div>

        <div className='container'>

            <div className="row mt-5">

                <div className="col-md-6">
                    <img src="https://theuniqueacademy.co.in/assets/images/test.png" alt="" style={{ width: '100%' }} />
                </div>

                <div className="col-md-6 my-auto">

                    <h1 className='text-center mb-3'>LOGIN FORM</h1>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={loginSubmit}>
                        {({ values, handleSubmit, handleChange, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <label>Email Address</label>
                                <input required type="email" className="form-control mb-3" value={values.email} name="email" onChange={handleChange} />

                                <label>Password</label>
                                <input required type="password" className="form-control mb-3" value={values.password} name="password" onChange={handleChange} />

                                <Link to="/" className="">
                                    Forgot Password
                                </Link>

                                <button type="submit" className="btn btn-success w-100 my-2">
                                    {isSubmitting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
                                </button>
                            </form>
                        )}
                    </Formik>

                </div>

            </div>

        </div>


    )
}

export default Login