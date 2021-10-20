import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    // google sign in method
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    }

    // logOut process
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch(error => {
            console.log("logOut-->", error.message);

        }).finally(() => setIsLoading(false));
    }

    // create User With Email And Password
    const emailAndPasswordSignUp = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("ps-log--", result.user);
                setError('');
            }).catch(error => {
                setError(error.message);

            }).finally(() => setIsLoading(false));
    }

    // email and password login system
    const emailAndPasswordLogIn = (email, password) => {
        setIsLoading(false)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential", userCredential.user);
                setError("")
            })
            .catch((error) => {
                setError(error.message);

            }).finally(() => setIsLoading(false));
    }

    // update user name
    const updateUserName = (name) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {})
            .catch((error) => {
                console.log('usr-up-name-->', error.message);
            }).finally(() => setIsLoading(false));
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
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [])

    
    return {
        user,
        googleSignIn,
        isLoading,
        logOut,
        error,
        emailAndPasswordSignUp,
        emailAndPasswordLogIn,
        updateUserName,
    }
};

export default useFirebase;
