// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop"; // ✅ Add this line

const Layout = () => {
  return (
    <>
      <ScrollToTop /> {/* ✅ Place this before Navbar */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
