import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Playlist from "@/components/Playlist";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <React.Fragment>
      <Playlist />
      <HeroBanner />
      <Schedule />
    </React.Fragment>
  );
}
