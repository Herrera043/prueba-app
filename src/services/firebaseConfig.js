import { initializeApp } from '@react-native-firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx0EM6zD066MPe0UWIdAjdnqSMuOb8JJk",
  authDomain: "estacionalosmart.firebaseapp.com",
  projectId: "estacionalosmart",
  storageBucket: "estacionalosmart.firebasestorage.app",
  messagingSenderId: "970523258405",
  appId: "1:970523258405:web:48e3b8c828ad328ac6d9cc",
  measurementId: "G-CWCBFC4REC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;