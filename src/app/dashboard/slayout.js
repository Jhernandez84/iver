"use client";

import React, { useContext } from "react";
import dynamic from 'next/dynamic';
import { AuthProvider } from "@/Context/UserContext/UserContextComponent";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";

const SideBarComponent = dynamic(() => import("@/Components/Sidebar/SideBar"));
const inter = dynamic(() => import("next/font/google"));

export default function DashboardLayout({ children }) {
  const { userThemePreference } = useContext(ThemeContext);
  // const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div
        className={
          userThemePreference === "Dark"
            ? "main-container Dark"
            : "main-container"
        }
      >
        <SideBarComponent />
        {children}
      </div>
    </AuthProvider>
  );
}

