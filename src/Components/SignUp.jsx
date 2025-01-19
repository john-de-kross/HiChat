import React, { useEffect, useRef, useState } from "react";
import hide from './hide.png'
import view from './view.png'
import validate from 'validate.js'
import constraints from './FormValidation'
import { auth} from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import { setDoc, doc,  getFirestore } from "firebase/firestore";


function SignUp() {
    const db = getFirestore()
    const emailRef = useRef(null)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [showMessage, setShowMessage] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: ''
    })

    function handleForm(e){
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    function handlePasswordVisibility(){
        setShow(prev => !prev)
    }

    async function submitfunctions(e){
        let isValid = true
        e.preventDefault()
        const validateError = validate(formData, constraints);
        setErrors(validateError || {})
        if (validateError) {
            return

        }
        try{
            const userCredentials = createUserWithEmailAndPassword(auth, formData.email, formData.password)
            console.log('user created successfully', (await userCredentials).user)
            const user = (await userCredentials).user
            await setDoc(doc(db, 'users', user.uid), {
                fullName: formData.fullName,
                username: formData.username,
                email: formData.email,
                createdAt:  Timestamp.now()
            })
            
            navigate('/initialize')
            setTimeout(() => {
                navigate('/login') 
            }, 5000)
            
            
        }
        catch (err) {
            console.log('Failed to sign up', err)
            setEmailError('Email already exist')
        }
    }
    
    useEffect(() => {
        if (setShowMessage) {
            const timeout = setTimeout(() =>{
                setShowMessage(false)
            }, 8000)
            return () => {clearTimeout(timeout)} 
        }
    }, [showMessage])

    return ( 
        <div className="flex flex-col place-items-center md:gap-4 md:justify-center w-full min-h-screen bg-slate-900">
            <div>
                <h1 className="text-white text-xl md:text-2xl">ChatFam</h1>
            </div>
            <div className="con w-full md:w-96 md:h-auto md:bg-slate-700">
                <form className="space-y-4 py-9 md:pl-7">
                    <div className="input-fieldy">
                        <input className="w-full rounded-xl md:rounded outline-none h-[50px] md:w-[90%]"
                         type="text" 
                         name="fullName" 
                         value={formData.fullName}
                         onChange={handleForm}
                        required style={errors.fullName && {border: "2px solid red"}}/>
                        <label className="labelling">Full Name</label>
                        <div className="error">
                            {errors.fullName && 
                                <p>{errors.fullName.join(", ")}</p>
                            }
                        </div>

                    </div>
                    <div className="input-fieldy">
                        <input className="w-full outline-none rounded-xl md:rounded h-[50px] md:w-[90%]" 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleForm}
                        required style={errors.username && {border: "2px solid red"}}/>
                        <label className="labelling md:text-sm md:font-[300]">Username</label>
                        <div className="error">
                        {errors.username && (
                                <p>{errors.username.join(", ")}</p>
                            )}
                        </div>
                    </div>
                    <div className="input-fieldy">
                        <input className="w-full  rounded-xl md:rounded outline-none h-[50px] md:w-[90%]" 
                        type="text" 
                        name="email"
                        onChange={handleForm}
                        value={formData.email}
                        required style={errors.email && {border: "2px solid red"}} ref={emailRef}/>
                        <label className="labelling email  md:text-sm md:font-[300]">Email</label>
                        <div className="error">
                        {errors.email && (
                                <p>{errors.email.join(", ")}</p>
                            )|| emailError && (
                                <p>{emailError}</p>
                            )}

                        </div>
                    </div>
                    <div className="input-fieldy relative">
                        <input className="w-full outline-none rounded-xl md:rounded h-[50px] md:w-[90%]"
                        type={show ? 'text' : 'password'}
                        name="password"
                        onChange={handleForm}
                        value={formData.password}
                        required style={errors.password && {border: "2px solid red"}}/>
                        <label className="labelling md:text-sm md:font-[300]">Password</label>
                        <img onClick={handlePasswordVisibility} className="absolute eye w-6 h-6 right-12 mt-3" src={show ? view : hide} alt="password visibility" />
                        <div className="error">
                        {errors.password && (
                                <p>{errors.password.join(", ")}</p>
                            )}
                        </div>
                    </div>
                    <div className="btn text-white font-[500]">
                        <button onClick={submitfunctions} className="bg-blue-800 rounded w-full md:w-[90%] md:rounded-2xl h-[50px]">Sign Up</button>

                    </div>
                    <div className="flex justify-center gap-1 text-white font-[600]">
                        <h2>Already have an Account?</h2>
                        <Link to={'/'} className="underline text-blue-400 md:hover:text-gray-400">Log in</Link>

                    </div>
                </form>
            </div>
        </div>
     );
}
export default SignUp;


