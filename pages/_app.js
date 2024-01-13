"use client"
import "@/styles/globals.css";
import { AuthProvider } from '../contexts/AuthContext';
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  
  return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
);
}
