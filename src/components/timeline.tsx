import React from "react";
import { items } from "./timeline-items.json";
import styles from "./timeline.module.css";

/*
  TODO: inforce better types below
*/

type TimelineItem = {
  date: string;
  location: string;
  type: string;
  title: string;
  description: string | undefined;
};

const Items = () => {
  return (
    <div>
      {items.map((item: TimelineItem) => {
        return (
          <div className={styles.item}>
            <h1>{item.date}, {item.location}</h1>
            <h2>{item.title}</h2>
            {item.description && <h2>{item.description}</h2>}
          </div>
        );
      })}
    </div>
  );
};

const Timeline = () => {
  return (
  <div className={styles.timeline}>
    <hr className="my-8 h-px border-t-0 bg-black" />
    <h1>What I am up to...</h1>
    <Items/>
  </div>);
};

export default Timeline;
