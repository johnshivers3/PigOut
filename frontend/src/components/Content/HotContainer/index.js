import { HotCard } from "./HotCard";
import "./HotContainer.css";

export const HotContainer = () => {
  return (
    <>
      <h2>HotContainer</h2>
      <div className="hot-container">
        <HotCard />
        <HotCard />
        <HotCard />
        <HotCard />
      </div>
    </>
  );
};
