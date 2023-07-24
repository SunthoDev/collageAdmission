import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export let AuthContext = createContext()


const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)
    let auth = getAuth(app)

    // create user
    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // console.log(user)

    // observed user

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (observedUser => {
            setUser(observedUser)
            setLoading(false)

        }))
        return () => {
            unSubscribe()
        }
    }, [])

    // login user 
    let loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut user
    let logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // github aut 
    let githubLogin = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // google aut 
    let googleLogin = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // password reset
    let sendPasswordReset=(emailValue)=>{
        return sendPasswordResetEmail(auth,emailValue)
    }





    //auth Info Provider
    let authInfo = {
        user,
        createUser,
        logOutUser,
        loginUser,
        githubLogin,
        googleLogin,
        sendPasswordReset
    }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;