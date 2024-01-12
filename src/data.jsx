import {db} from './firebase'
import {addDoc, collection, doc, deleteDoc} from 'firebase/firestore'

export const Data = () => {
//function to add a data to firebase database
    const handleSubmit = async() => {
      try {
        await addDoc(collection(db, 'info'), {
          name: 'Fran'
          age: 21
          id: 'vssf2y2fwh2tiuy'
        })  
      }catch (error){
          console.log(error)
      }
    }

//function to delete a data from firebase
    const handleDelete = async() => {
      try {
        await deleteDoc(doc(db, 'info', id)           
      }catch (error){
         console.log(error)
      }
    }
}