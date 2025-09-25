// // public/firebase-messaging-sw.js
// importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

// firebase.initializeApp({
//    apiKey: "AIzaSyAWaW8FBLIjz9KHXA1_ll4yCWwj7cJZmMI",
//   authDomain: "frontendmsg.firebaseapp.com",
//   projectId: "frontendmsg",
//   storageBucket: "frontendmsg.firebasestorage.app",
//   messagingSenderId: "457714421954",
//   appId: "1:457714421954:web:29e0fa4318f612667ceb5b",
//   measurementId: "G-NVJYHHWSNF",
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log("Background message received:", payload);

//   self.registration.showNotification(payload.notification.title, {
//     body: payload.notification.body,
//     icon: "/vite.svg",
//   });
// });