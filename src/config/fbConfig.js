import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDT3WnwBRttiOD0mjbVc-YXpD0-bUaNbDU",
    authDomain: "netninjamarioplan-8099f.firebaseapp.com",
    databaseURL: "https://netninjamarioplan-8099f.firebaseio.com",
    projectId: "netninjamarioplan-8099f",
    storageBucket: "netninjamarioplan-8099f.appspot.com",
    messagingSenderId: "789974169604",
    appId: "1:789974169604:web:51bb5363ad25c7831edd51",
    measurementId: "G-513FW1J897"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase



