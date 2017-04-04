import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAv4lAY73L5HOyJ-dL3o4TNntrqYExYA_Q",
    authDomain: "yellow-3191d.firebaseapp.com",
    databaseURL: "https://yellow-3191d.firebaseio.com",
    projectId: "yellow-3191d",
    storageBucket: "yellow-3191d.appspot.com",
    messagingSenderId: "1073984159030"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth