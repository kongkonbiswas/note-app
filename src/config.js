import * as firebase from 'firebase';
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgw6zqtjwKggL4V0dhQyn7Bv6jTvKMkmo",
    authDomain: "note-app-f9f89.firebaseapp.com",
    projectId: "note-app-f9f89",
    storageBucket: "note-app-f9f89.appspot.com",
    messagingSenderId: "992703777733",
    appId: "1:992703777733:web:2d542d931e22eed88699ac"
  };

// it maintains the call one time
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }