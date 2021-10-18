import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    
    // google sign in method
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
    }

    // logOut process
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log('logOut->', error.message);
        });
    }

    // The recommended way to get the current user is by setting an observer on the Auth object
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }

        });
        return () => unSubscribe;
    }, [auth])

    
    return {
        user,
        googleSignIn,
        logOut,
    }
};

export default useFirebase;