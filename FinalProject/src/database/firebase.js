import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqoYmCaXl7A5G_9HsGtVaYXAQte7H06eg",
    authDomain: "digitalschool-rn.firebaseapp.com",
    projectId: "digitalschool-rn",
    storageBucket: "digitalschool-rn.appspot.com",
    messagingSenderId: "907928162854",
    appId: "1:907928162854:web:4e4991b94fcc330c3ecce7",
    measurementId: "G-1JKXZY2SL4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;