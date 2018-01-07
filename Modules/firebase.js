import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig ={
  apiKey: "AIzaSyBmNTu1uQ3ewnkv-ZWSNe6Vekha6PNdh0A",
  authDomain: "teammate-fe155.firebaseapp.com",
  databaseURL: "https://teammate-fe155.firebaseio.com",
  projectId: "teammate-fe155",
  storageBucket: "teammate-fe155.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
