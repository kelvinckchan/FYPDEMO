import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDQRru2tRRRuLTtkqTDcwtS4cxU9XXZhuI",
    authDomain: "fir-app-bab56.firebaseapp.com",
    databaseURL: "https://fir-app-bab56.firebaseio.com",
    projectId: "fir-app-bab56",
    storageBucket: "fir-app-bab56.appspot.com"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
