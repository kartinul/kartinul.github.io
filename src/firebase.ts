import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_b0nTQcXlszmNmvIk9zBOyOg9buM48aM",
  authDomain: "kartik-nul.firebaseapp.com",
  projectId: "kartik-nul",
  storageBucket: "kartik-nul.firebasestorage.app",
  messagingSenderId: "692368013456",
  appId: "1:692368013456:web:a3fcfc5fdc9d31cf790015",
  measurementId: "G-N6P52Z5HQX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
