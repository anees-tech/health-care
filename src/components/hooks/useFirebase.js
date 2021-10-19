import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    
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

    // createUserWithEmailAndPassword
    const emailAndPasswordSignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
            }).catch(error => {
                setError(error.message);

            })
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
        error,
        emailAndPasswordSignIn,
    }
};

export default useFirebase;