"use client"
import {createContext, useContext, useState, useEffect} from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';


const AuthContext = createContext();
export default function AuthContextProvider({children})
{
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user);
            setIsLoading(false);
        }else{
            setUser(null);
            setIsLoading(false);}
    });

    return ()=> unsub();
}, [])


const handleSignInWithGoogle = async () => {
    setIsLoading(true)
    try{
        await signInWithPopup(auth, new GoogleAuthProvider())
    }
    catch (error){
        setError(error?.message)
    }
    setIsLoading(false)
}

const handleLogout = async () =>{
    setIsLoading(true)
    try{
        await signOut(auth)
    }
    catch (error){
        setError(error?.message)
    }
    setIsLoading(false)
}
return <AuthContext.Provider value={{
    user,
    isLoading, 
    error,
    handleSignInWithGoogle,
    handleLogout,
}}>
    {children}
</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);