import { createContext, useContext } from "react";
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
 } from "firebase/auth";
 import { auth } from "../Firebase";

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }
    
    return(
        <AuthContext.Provider value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
   return useContext(AuthContext);
}