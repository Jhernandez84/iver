import React, { useContext } from "react";
import { AuthProvider } from "@/Context/UserContext/UserContextComponent";
import { AuthContext } from "@/Context/UserContext/UserContext";
import dynamic from "next/dynamic";

// Dynamically import Inter font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Dynamically import SideBarComponent
const SideBarComponent = dynamic(() => import("@/Components/Sidebar/SideBar"));

export default function DashboardLayout({ children }) {
  // const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="main-container">
        {/* <SideBarComponent /> */}
        {children}
      </div>
    </AuthProvider>
  );
}
