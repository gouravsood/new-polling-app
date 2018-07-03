import firebase from "firebase"
import "firebase/firestore"

// const config = {
// apiKey: ,
// authDomain: ,
// databaseURL: ,
// projectId: ,
// storageBucket: ,
// messagingSenderId: ,
// }

var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  };


console.log(config);

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get polls() {
    return this.store().collection('polls');
  }
}

export default new Firebase();