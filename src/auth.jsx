import {useState, useEffect} from 'react'
import {auth} from './firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'

export const Auth = () => {
    const [currentUser, setCurrentUser] = useState('')

    useEffect(()=> {
       onAuthStateChanged(auth, (user)=> {
         if(user){
           setCurrentuser(user)
         }else {
           setCurrentuser(null)
         }
       })
     },[])

    const handleSignup = async () => {
       try {
          const { user } = await createUserWithEmailAndPassword(
            auth, 
            email, 
            password
           )
        } catch (error) {
           console.log(error)
        }
     }

    const handleLogin = async () => {
       try {
          const { user } = await signInWithEmailAndPassword(
            auth, 
            email, 
            password
           )
        } catch (error) {
           console.log(error)
        }
     }

    const logOut = async () => {
      await signOut(auth)
      setCurrentuser(null)
    }
}