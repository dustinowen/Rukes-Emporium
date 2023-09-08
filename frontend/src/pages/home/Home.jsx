import "./home.css";
import React from "react";
import RUKE from "../../assets/imgs/welcome.png";

export default function Home() {
  return (
    <div className="home-container">
      <img src={RUKE} />
      <div className="who-is-ruke">
        <h3>
          Hey folks, I'm Ruke, and I've fetched a tail-wagging treasure trove of recommendations for all you wonderful pals out there!
        </h3>
        <div className="all-my-friends">
          <h5>
            *all products have been tested by me, or one of my trusted furry
            friends (who are all just as pawsome as I am!).
          </h5>
        </div>
      </div>
    </div>
  );
}