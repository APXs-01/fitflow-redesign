import { initializeApp, getApps, getApp } from "firebase/app";
// The "firebase/auth" wrapper package's export map has no "react-native"
// condition and silently resolves to the browser build (memory-only
// persistence). Importing from "@firebase/auth" directly gets the real
// React Native build with AsyncStorage-backed persistence.
import { initializeAuth, getReactNativePersistence, getAuth, type Auth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth: Auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  // already initialized (e.g. Fast Refresh) — reuse the existing instance
  auth = getAuth(app);
}

export { auth };
export const firestore = getFirestore(app);
export default app;
