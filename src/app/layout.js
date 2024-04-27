"use client";

import React, { useContext, useEffect } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContextComponent";
import { ThemeProvider } from "@/Context/ThemeContext/ThemeContextComponent";
import { ThemeContext } from "@/Context/ThemeContext/ThemeContext";
import { AuthContext } from "@/Context/UserContext/UserContext";

import { Inter } from "next/font/google";
import "./globals.css";
import SideBarComponent from "@/Components/Sidebar/SideBar";
import "../Components/Sidebar/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
