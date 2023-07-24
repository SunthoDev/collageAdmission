import React, { useContext, useState } from 'react';
import "./Registration.css"
import Lottie from 'react-lottie';
import loginAnimations from '../../../../public/Login.json';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from 'firebase/auth';

const Registration = () => {

    let { createUser, githubLogin, googleLogin } = useContext(AuthContext)
    let gitProvider = new GithubAuthProvider();
    let googleProvider = new GoogleAuthProvider();

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


    let handleSingUp = (event) => {
        setError("")
        setSuccess("")

        event.preventDefault()
        let name = event.target.name.value
        let photo = event.target.photo.value
        let email = event.target.email.value
        let password = event.target.password.value
        let confirm = event.target.confirm.value
        // console.log(name,photo,email, password,confirm)

        if (password !== confirm) {
            setError("Please Meatch Your Password")
            return
        }

        createUser(email, password)
            .then(result => {

                let createUser = result.user
                setSuccess(" Your SingUp Successfully ")
                console.log(createUser)
                
                updateProfile(createUser, { displayName: name, photoURL: photo })
                    .then(result => {
                    })
                    .catch(error => {
                    })
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
                    // setSuccess(" Your SingUp Github Successfully ")
                    // let googleUser = result.user
                    console.log(result)
                })
                .catch(error => {
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

                        <h2 className='loginHead'>SingUp to Admission website</h2>

                        <form onSubmit={handleSingUp} className='mt-10'>

                            <div className=" w-full ">
                                <label className="labelName">Enter Your Name</label>
                                <input type="text" placeholder="Username or name" name='name' className="input input-bordered w-full" />
                            </div>
                            <div className=" w-full ">
                                <label className="labelName">Enter Your Photo URL</label>
                                <input type="text" placeholder="Your Photo URL" name='photo' className="input input-bordered w-full" />
                            </div>
                            <div className=" w-full ">
                                <label className="labelName">Enter Your Email</label>
                                <input type="email" placeholder="Username or Email" name='email' className="input input-bordered w-full" />
                            </div>

                            <div className=" w-full ">
                                <label className="labelName">Enter Your Password</label>
                                <input type="password" placeholder="Enter Your Password" name='password' className="input input-bordered w-full" />
                            </div>
                            <div className=" w-full ">
                                <label className="labelName">Enter Your Confirm Password</label>
                                <input type="password" placeholder="Enter Your Confirm Password" name='confirm' className="input input-bordered w-full" />
                            </div>

                            <h2 className='error'>{error}</h2>
                            <h2 className='success'>{success}</h2>
                            
                            <input className="btn w-full btn-primary" type="submit" value="Login Now" />
                        </form>


                        {/* ==============social login================ */}

                        <div className="orLogin">
                            <h2 className=''>or</h2>
                        </div>

                        <div onClick={handleGoogleLogin} className="socialLogin mt-6">
                            <button className='GoogleLogin'>
                                <i class="fa fa-google" aria-hidden="true"></i>
                                <span>Continue With Google</span>
                            </button>

                            <button onClick={handleGithubLogin} className='GithubLogin mt-4'>
                                <i class="fa fa-github" aria-hidden="true"></i>
                                <span>Continue With Github</span>
                            </button>

                        </div>

                        <div className="singUpLink mt-14">
                            <h2 className=''>Already Have an account? </h2>
                        </div>
                        <Link to="/login" >
                            <button className='registerLink w-full'>SingIn</button>
                        </Link>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default Registration;