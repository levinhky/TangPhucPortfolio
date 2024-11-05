import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import Playlist from "@/components/Playlist";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroBanner />
      <Playlist />
      <Schedule />
      <Footer />
    </React.Fragment>
  );
}
