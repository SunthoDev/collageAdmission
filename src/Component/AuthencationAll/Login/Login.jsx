import React, { useContext, useRef, useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import loginAnimations from '../../../../public/Login.json';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, } from 'firebase/auth';

const Login = () => {

    let { loginUser, githubLogin, googleLogin,sendPasswordReset} = useContext(AuthContext)
    let gitProvider = new GithubAuthProvider();
    let googleProvider = new GoogleAuthProvider();
    let emailRef=useRef()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimations,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")


    let handleLogin = (event) => {

        setError("")
        setSuccess("")
        event.preventDefault()
        let email = event.target.email.value
        let password = event.target.password.value
        // console.log(email, password)

        loginUser(email, password)
            .then(result => {

                let user = result.user
                console.log(user)
                setSuccess("Your Login Successfully")
                event.target.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }


    // Google login 
    let handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                setSuccess(" Your SingUp Google Successfully ")
                let googleUser = result.user
                console.log(googleUser)
            })
            .catch(error => {
                setError(error.message)
            })

    }

        // Github login 
        let handleGithubLogin = () => {
            githubLogin(gitProvider)
                .then(result => {
                    setSuccess(" Your SingUp Github Successfully ")
                    let googleUser = result.user
                    console.log(googleUser)
                })
                .catch(error => {
                    setError(error.message)
                })

        }

        // handle reset your password 

        let handleResetPass=()=>{
            let emailValue=emailRef.current.value
            if(!emailValue){
                alert("Please provide your email $ reset your password")
            }
            sendPasswordReset(emailValue)
            .then(result=>{
                alert("PLease check your email & reset Your Password")
            })
            .catch(error=>{
                setError(error.message)
            })
        }




    return (
        <div className=''>

            <div className=" bg-base-200 px-4 sm:px-16 py-20">

                <div className="grid sm:grid-cols-2 gap-5 items-center">

                    <div className="text-center">

                        <Lottie options={defaultOptions} />

                    </div>


                    <div className="LoginInput px-10 sm:px-14 py-8">

                        <h2 className='loginHead'>SingIn to Admission website</h2>

                        <form onSubmit={handleLogin} className='mt-10'>

                            <div className=" w-full ">
                                <label className="labelName">Enter Your Email</label>
                                <input ref={emailRef} type="text" placeholder="Username or Email" name='email' className="input input-bordered w-full" />
                            </div>

                            <div className=" w-full ">
                                <label className="labelName">Enter Your Password</label>
                                <input type="text" placeholder="Enter Your Password" name='password' className="input input-bordered w-full" />
                            </div>

                            <h2 className='error'>{error}</h2>
                            <h2 className='success'>{success}</h2>

                            <button onClick={handleResetPass} className="ForgetPass mt-4">
                                <h2>Forgot Your Password</h2>
                            </button>

                            <input className="btn w-full btn-primary" type="submit" value="Login Now" />
                        </form>


                        {/* ==============social login================ */}

                        <div className="orLogin">
                            <h2 className=''>or</h2>
                        </div>

                        <div className="socialLogin mt-6">

                            <button onClick={handleGoogleLogin} className='GoogleLogin'>
                                <i class="fa fa-google" aria-hidden="true"></i>
                                <span>Continue With Google</span>
                            </button>

                            <button onClick={handleGithubLogin} className='GithubLogin mt-4'>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                <span>Continue With Github</span>
                            </button>

                        </div>

                        <div className="singUpLink mt-14">
                            <h2 className=''>Don't have an Upwork account? </h2>
                        </div>
                        <Link to="/register" >
                            <button className='registerLink w-full'>SingUp</button>
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;