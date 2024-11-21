import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../Firebase/firebase.config"

export const authContext = createContext()

const AuthProvider = ({routes}) =>{
    // console.log(routes)
     //receive all data 
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)

    //user register
    const createNewUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //user login
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //user sing out
    const singOut = ()=>{
        signOut(auth)
    }

    // sing in with google
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)

    }

    //update user profile
    const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser , updateData)
    }

    //send a password rester email
    // const passwordReset = (email) =>{
    //     sendPasswordResetEmail(auth,email)
    // }

    //sent all info context api
    const authInfo ={
        user,
        setUser,
        loading,
        createNewUser,
        userLogin,
        singOut,
        googleLogin,
        updateUserProfile,
    }
      // create a observer
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            if(currentUser){
                setUser(currentUser)
                
            }else{
                setUser(null)
            }
            setLoading(false)

            // delete observer
            return ()=>{
                unsubscribe()
            }
        })
    },[])

    return(
        <div>
            <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
        </div>

    )
}

export default AuthProvider