import React, { useEffect, useState } from "react";
import hide from './hide.png'
import validate from 'validate.js'
import constraints from './FormValidation'
import supabase from "./supabaseClient";

function SignUp() {
    
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

    async function submitfunctions(e){
        let isValid = true
        e.preventDefault()
        const validateError = validate(formData, constraints);
        setErrors(validateError || {})
        let { data: chatTable, error } = await supabase
        .from('chatTable')
        .select('email')

        
        if (error) {
            console.log("error fetching data", error)
            isValid = false
            return
            
        } 
        const emailExist = chatTable.some(user => user.email === formData.email) 

        if (validateError) {
            isValid = false
        }
        if (emailExist) {
            setEmailError('email already exist')
            isValid = false 
        }
        else{
            setEmailError('')
        }

        if (isValid) {
            let { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password
            })
  
            if (error) {
                console.log('An error occurred:', error.message)
                return
            }
            
            if (data?.user) {
                console.log("user signed up successfully:", data.user)
                setShowMessage(true)
                
            }else{
                console.warn("sign up succeeded but no user data returned")
            }
            

            
            const { data:tableData, error: tableError } = await supabase
            .from('chatTable')
            .insert([
            { username: formData.username, email: formData.email, password:formData.password},
            ])
            .select()

            if (tableError) {
                console.log("An error occurred:", tableError.message)
                return
                
            }

            if (tableData) {
                console.log('your data', tableData)
                
            }
        

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
        <div className="flex flex-col place-items-center justify-center md:gap-4 md:justify-center w-full min-h-screen bg-slate-900">
            <div className={`${showMessage ? 'flex' : 'hidden'}
             justify-center items-center absolute w-full h-14 bg-white top-10 md:top-8 font-[500] rounded-xl md:w-[50%] md:h-14 md:px-4`}>
                <h3>An email has been sent to your inbox. Please click the confirmation link to complete your registration.</h3>
            </div>
            <div>
                <h1 className="text-white text-xl md:text-2xl">ChatGoons</h1>
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
                        <input className="w-full rounded-xl md:rounded outline-none h-[50px] md:w-[90%]" 
                        type="text" 
                        name="email"
                        onChange={handleForm}
                        value={formData.email}
                        required style={errors.email && {border: "2px solid red"}}/>
                        <label className="labelling email  md:text-sm md:font-[300]">Email</label>
                        <div className="error">
                        {errors.email && (
                                <p>{errors.email.join(", ")}</p>
                            )}
                        </div>
                    </div>
                    <div className="input-fieldy relative">
                        <input className="w-full outline-none rounded-xl md:rounded h-[50px] md:w-[90%]"
                        type="password" 
                        name="password"
                        onChange={handleForm}
                        value={formData.password}
                        required style={errors.password && {border: "2px solid red"}}/>
                        <label className="labelling md:text-sm md:font-[300]">Password</label>
                        <img className="absolute w-6 h-6 right-12 mt-3 cursor-pointer" src={hide} alt="" />
                        <div className="error">
                        {errors.password && (
                                <p>{errors.password.join(", ")}</p>
                            )}
                        </div>
                    </div>
                    <div className="btn text-white font-[500]">
                        <button onClick={submitfunctions} className="bg-blue-800 rounded w-full md:w-[90%] md:rounded-2xl h-[50px]">Sign Up</button>

                    </div>
                </form>
            </div>
        </div>
     );
}
export default SignUp;


