import {createContext, useContext, useEffect, useState} from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '/firebase'
import { useRouter } from 'next/router'

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ( {children } ) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log('>>> Logging User state', user)

    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()

    }, [])

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const  signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = async () => {
        setUser(null)
        await signOut(auth)
    }
    //google authentication
    const provider = new GoogleAuthProvider();
    const google = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;

                // The signed-in user info.
                const user = result.user;
                console.log({ credential, token, user });
                router.push('/dashboard/home')

            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;

                // The email of the user's account used.
                const email = error.email;

                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
            })
        ;};
    //google testing ###

    return (
        //All components will have access to the below methods / states
        <AuthContext.Provider value={{ user, signIn, register, logOut, google }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}