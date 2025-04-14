importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBot-d8KCNhLxbgjzQPJOpZNTyqtpmwQeI",
    authDomain: "cyber-nexus.firebaseapp.com",
    projectId: "cyber-nexus",
    storageBucket: "cyber-nexus.firebasestorage.app",
    messagingSenderId: "106147875112",
    appId: "1:106147875112:web:bb8d32e19f538f81f5681d",
});

const messaging = firebase.messaging();

// Fon rejimida notifikatsiyalarni ko‘rsatish
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/img.png', // Ikonka yo‘li (ixtiyoriy)
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});