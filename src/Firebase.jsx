import Firebase from "Firebase";


var firebaseApp = Firebase.initializeApp( {

    apiKey: "AIzaSyDfLCFUi1XTeGdikYOkjlBEOAOvmoZYsmE",
  
    authDomain: "portfoli-form.firebaseapp.com",
  
    projectId: "portfoli-form",
  
    storageBucket: "portfoli-form.appspot.com",
  
    messagingSenderId: "468558048958",
  
    appId: "1:468558048958:web:236fa91d3b5b8f0d88f8ef"
  
  });

  var db = firebaseApp.firestore();

  export  {db};
  