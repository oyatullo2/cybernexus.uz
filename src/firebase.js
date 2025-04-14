import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyBot-d8KCNhLxbgjzQPJOpZNTyqtpmwQeI",
  authDomain: "cyber-nexus.firebaseapp.com",
  projectId: "cyber-nexus",
  storageBucket: "cyber-nexus.firebasestorage.app",
  messagingSenderId: "106147875112",
  appId: "1:106147875112:web:bb8d32e19f538f81f5681d",
  measurementId: "G-B3J5BLTRRN",
};

// Firebase’ni ishga tushirish
const app = initializeApp(firebaseConfig);

// Messaging xizmatini olish
const messaging = getMessaging(app);

// Funksiyalarni eksport qilish
export { messaging, getToken, onMessage };