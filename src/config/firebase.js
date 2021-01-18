import firebase from "firebase/app";
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBLKf2jLOlyDeO-9sys_jG8EI5UAvHeENs",
    authDomain: "noob-fd8e9.firebaseapp.com",
    databaseURL: "https://noob-fd8e9.firebaseio.com",
    projectId: "noob-fd8e9",
    storageBucket: "noob-fd8e9.appspot.com",
    messagingSenderId: "673874049283",
    appId: "1:673874049283:web:380daadd4ae381d2c99136",
    measurementId: "G-M3FKH8K1XN"
};


firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth }