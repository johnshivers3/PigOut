import React from "react";

import { HotCard } from "./HotCard";
import "./HotContainer.css";

export const HotContainer = () => {
  return (
    <>
      <h1>HotContainer</h1>
      <div className="hot-container">
        <HotCard />
        <HotCard />
        <HotCard />
        <HotCard />
      </div>
    </>
  );
};
