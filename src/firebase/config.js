import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfWB5njvlLeDPIZDjhc-5bLNBfYQjQWD8",
    authDomain: "parkchamp-c94f7.firebaseapp.com",
    projectId: "parkchamp-c94f7",
    storageBucket: "parkchamp-c94f7.appspot.com",
    messagingSenderId: "963744288452",
    appId: "1:963744288452:web:5c06b708931ea857a10391"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }