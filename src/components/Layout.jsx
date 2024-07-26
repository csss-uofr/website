import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import EventCard from "./EventsCard";
import HeroSection from "./HeroSection";

const Layout = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="">
        <HeroSection />
        <EventCard />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
     <Footer />
    </div>
  );
};

export default Layout;
