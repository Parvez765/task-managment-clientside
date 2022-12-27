import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)

    // Create New User
    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // State Change
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscriber()
        }
    })

    const authValue = {user, loading, handleCreateUser}

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;