"use client";
import Image from "next/image";
import styles from "./page.module.css";

import React, { useContext, useState } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContext";
import { AuthContext } from "@/Context/UserContext/UserContext";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import SideBarComponent from "@/Components/Sidebar/SideBar";

import LogInPage from "./home/page";

export default function Home() {
  const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);
  const {
    setUserThemeModeDark,
    setUserThemeModeLight,
    setUserThemeModeSystem,
  } = useContext(ThemeContext);

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <html>
      <body>
        {/* <SideBarComponent /> */}
        <LogInPage
          authUser={authUser}
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
        />
      </body>
    </html>
  );
}
