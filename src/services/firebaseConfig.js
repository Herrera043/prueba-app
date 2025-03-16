import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  // Aquí debes agregar tu configuración de Firebase
  apiKey: "tu-api-key",
  authDomain: "tu-auth-domain",
  projectId: "tu-project-id",
  storageBucket: "tu-storage-bucket",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;