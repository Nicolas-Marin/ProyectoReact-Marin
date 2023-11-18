import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCl6-kXlU6kW2ZLjsJTy3FPUv-76a7CBB8",
  authDomain: "react-coder-94c7f.firebaseapp.com",
  projectId: "react-coder-94c7f",
  storageBucket: "react-coder-94c7f.appspot.com",
  messagingSenderId: "1075560889914",
  appId: "1:1075560889914:web:81833aec4e06fbaf0b3f03"
};
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
