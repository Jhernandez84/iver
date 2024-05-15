"use client";

import React, { useContext } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContextComponent";
import { AuthContext } from "@/Context/UserContext/UserContext";

import { Inter } from "next/font/google";
import SideBarComponent from "@/Components/Sidebar/SideBar";
// import { Html } from "next/document";
import { ThemeProvider } from "@/Context/ThemeContext/ThemeContextComponent";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import '../page.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {
  const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);
  const { userThemePreference } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <AuthProvider>
        <div
          className={
            userThemePreference === "Dark"
              ? "main-container Dark"
              : "main-container"
          }
        >
          {/* <div className="main-container"> */}
          <SideBarComponent />
          {children}
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
