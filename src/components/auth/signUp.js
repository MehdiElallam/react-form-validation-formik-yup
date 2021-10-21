import React from 'react'
import { Formik, Form } from 'formik'
import { CustomInput } from '../elements/CustomInput'
import * as Yup from 'yup'

export default function SignUp() {

    const validation = Yup.object({
        firstName: Yup.string().max(20, `can't have have more than 20 caracter`).required('firstName is required'),
        lastName: Yup.string().max(20, `can't have have more than 20 caracter`).required('lastName is required'),
        email: Yup.string().email(`Invalid email`).required('Email is required'),
        password: Yup.string().min(6, `The password should be at least 6 caracters`).required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], `Password dosen't match`).required('Required')
    })

    return (
        <>
            <Formik 
                initialValues={{
                    firstName : '',
                    lastName : '',
                    email : '',
                    password : '',
                    confirmPassword : ''
                }}

                validationSchema={validation}
            
            >
                {
                    formik => (
                        <div>
                            <h2 className="text-center mb-5">Signup</h2>
                            <Form>
                                <div className="row mb-2">
                                    <CustomInput label="First Name" name="firstName" placeholder="First Name..." type="text" />
                                </div>
                                <div className="row mb-2">
                                    <CustomInput label="Last Name" name="lastName" placeholder="Last Name..." type="text" />
                                </div>
                                <div className="row mb-2">
                                    <CustomInput label="Email" name="email" placeholder="Email..." type="email" />
                                </div>
                                <div className="row mb-2">
                                    <CustomInput label="Password" name="password" placeholder="Password..." type="password" />
                                </div>
                                <div className="row mb-2">
                                    <CustomInput label="Confirm password" name="confirmPassword" placeholder="Password..." type="password" />
                                </div>

                                <button className="btn btn-dark mt-3" type="submit" >Register</button>
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}
