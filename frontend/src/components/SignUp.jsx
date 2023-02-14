import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignUp.css'

const Signup = () => {

    const navigate = useNavigate();

    const userSubmit = async (formdata) => {
        console.log(formdata)

        const res = await fetch('http://localhost:8000/user/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(res.status);

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Signed Successfully'
            })
            navigate('/user');
        }

    }

    return (

        // <div className="signup-body">
        //     <div className='d-flex align-items-center justify-content-center'style={{ height: '90vh' }}>
        //         <div className="col-sm-6 col-md-4 col-lg-3">
        //             <div className='card'>
        //                 <div className="card-body">
        //                     <h1 className="text-center">Signup</h1>

        // <Formik
        //     initialValues={{ email: "", password: "", username: "", age: "" }}
        //     onSubmit={userSubmit}
        // >
        //     {
        //         ({ values, handleChange, handleSubmit }) => (
        //             <form onSubmit={handleSubmit}>
        //                 <label>Email</label>
        //                 <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

        //                 <label>Password</label>
        //                 <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

        //                 <label>Username</label>
        //                 <input required type="text" className='form-control mb-3' name="username" onChange={handleChange} value={values.username} />

        //                 <label>Age</label>
        //                 <input required type="number" className='form-control mb-3' name="age" onChange={handleChange} value={values.age} />

        //                 <button type="submit" className="btn btn-primary w-100">Submit</button>
        //             </form>
        //         )
        //     }
        // </Formik>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='container'>

            <div className="row mt-5">

                <div className="col-md-6">
                    <img src="https://img.freepik.com/premium-vector/isometric-style-illustration-about-registration-app-login-website-online-game_529804-422.jpg" alt="" style={{ width: '100%' }} />
                </div>

                <div className="col-md-6 my-auto">

                    <h1 className='text-center mb-3'>SIGNUP FORM</h1>

                    <Formik
                        initialValues={{ email: "", password: "", username: "", age: "" }}
                        onSubmit={userSubmit}
                    >
                        {
                            ({ values, handleChange, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <label>Email</label>
                                    <input required type="email" className='form-control mb-3' name="email" onChange={handleChange} value={values.email} />

                                    <label>Password</label>
                                    <input required type="password" className='form-control mb-3' name="password" onChange={handleChange} value={values.password} />

                                    <label>UserName</label>
                                    <input required type="text" className='form-control mb-3' name="username" onChange={handleChange} value={values.username} />

                                    <label>Age</label>
                                    <input required type="number" className='form-control mb-3' name="age" onChange={handleChange} value={values.age} />

                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </form>
                            )
                        }
                    </Formik>

                </div>

            </div>

        </div>

    )
}

export default Signup;