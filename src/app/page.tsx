import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Playlist from "@/components/Playlist";
import Schedule from "@/components/ScheduleHome";

export default function Home() {
  return (
    <React.Fragment>
      <Playlist />
      <HeroBanner />
      <Schedule />
    </React.Fragment>
  );
}
