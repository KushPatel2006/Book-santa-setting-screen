import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBi2AdmrjruX14-kOtmqMPiDjNnmHsIQkA",
    authDomain: "booksanta-9602d.firebaseapp.com",
    projectId: "booksanta-9602d",
    storageBucket: "booksanta-9602d.appspot.com",
    messagingSenderId: "1090953575262",
    appId: "1:1090953575262:web:42a6393db3b6c0dbb4adcf"
}
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
