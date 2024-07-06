import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <main className="w-full">
          <Outlet />
        </main>
      </div>
     <Footer />
    </div>
  );
};

export default Layout;
