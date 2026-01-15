import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_b0nTQcXlszmNmvIk9zBOyOg9buM48aM",
  authDomain: "kartik-nul.firebaseapp.com",
  projectId: "kartik-nul",
  storageBucket: "kartik-nul.firebasestorage.app",
  messagingSenderId: "692368013456",
  appId: "1:692368013456:web:a3fcfc5fdc9d31cf790015",
  measurementId: "G-N6P52Z5HQX",
};

export const app = initializeApp(firebaseConfig);

// Explicit type so TS doesn’t cry
export let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
