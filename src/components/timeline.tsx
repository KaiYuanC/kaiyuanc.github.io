"use client";

import Link from "next/link";
import PhotoTile from "./photo-tiles";
import React from "react";
import StickyBox from "react-sticky-box";
import { items } from "./timeline-items.json";
import styles from "./timeline.module.css";
/*
  TODO: 
  - inforce better types below
  - figure out how to highlight/underline in json files
  - firgure out how to add links efficiently, create your own component

  NEW CONCEPT:
  - each item has an image, title, sub, and rank. 1 being highest rank, also an id. rank is set to be unique
  - step 1: manual adding new item will make sure to change the order. the you can simply replace a rank/reorder them
  - filter: this will dynamically filter, then order them in the things they have
  - In the future, we want to connect to firebase, which makes adding an object to be updated dynamically. 
  - add tile layouts as components so we can reuse when there are enough elements to do

*/

type TimelineItem = {
  date: string;
  location: string | undefined;
  type: string;
  title: string;
  description: string | undefined;
  link: string | undefined;
  linkText: string | undefined;
};

const Items = () => {
  return (
    <div>
      {items.map((item: TimelineItem) => {
        return (
          <div className={styles.item}>
            <h3 className={styles.date}>{item.date}</h3>
            <div className={styles.itemInfo}>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              {item.link && (
                <Link
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.linkText}
                </Link>
              )}
              <h4>
                {item.location} {item.location && "|"} {item.type}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Timeline = () => {
  return (
    <div id="moments" className={styles.timeline}>
      <hr className="my-8 h-px border-t-0 bg-black" />
      <div className={styles.title}>More about me</div>
      <div className={styles.content}>
        {/* <div className={styles.line}></div> */}
        <PhotoTile/>
        <Items />
        <StickyBox>
          <div className={styles.filter}>
            <h2>Filter</h2>
            <Link href="add later">Work & Internship</Link>
            <Link href="add later">Projects</Link>
            <Link href="add later">Education</Link>
            <Link href="add later">Life</Link>
            <Link href="add later">Writings</Link>
          </div>
        </StickyBox>
      </div>
    </div>
  );
};

export default Timeline;
