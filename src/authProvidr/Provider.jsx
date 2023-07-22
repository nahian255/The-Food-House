import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);

const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setuser] = useState(null)

    // CreatUser .....
    const singUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Login User.....
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Manage User....
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            console.log('currentuser', currentUser);

            // if (user) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = user.uid;
            //     // ...
            // } else {
            //     // User is signed out
            //     // ...
            // }

        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { singUp, login, loading, user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;