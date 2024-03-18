"use client";

import Link from "next/link";
import Name from "./name";
import Photos from "./photos";
import React from "react";
import { Tooltip } from "react-tooltip";
import styles from "./home.module.css";

/*
  TODO: 
  - create a customized component for link with icon
  - add small icon to href links
  - complete contents
*/

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h2 className={styles.smalltext}>
          Hello! I'm Kai Yuan, I also go by Kai. <br></br>
          Recently, I finished my undergrad in Computer Science at University of
          Waterloo.
          <br></br>
        </h2>
        <br></br>
        <h1 className={styles.bigtext}>
          I like <mark className={styles.mark}>systems</mark> and <mark className={styles.mark}>experiments</mark> <br></br>
          and also music, coffee shops, dancing, boardgames, and crème brûlées... <br></br>
          Lately, I've been <br></br>
          learning from passionate people as a software engineer at work <br></br>
          exploring new cities, coasts, mountains, and grasslands <br></br>
          finding numbers and math in everyday life <br></br>
          and connecting with people around me, including you! <br></br>
        </h1>
        <br></br>
        <Link
          href={"https://www.linkedin.com/in/kaiyuan-chi/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          href={"https://github.com/KaiYuanC"}
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </Link>
        <Link href={"mailto:kaiyuanchi.make@gmail.com"}>Email </Link>
        {/* <Link href={"#moments"}>More about me <FontAwesomeIcon icon={faArrowDownLong} /> </Link> */}
        <a data-tooltip-id="my-tooltip-inline">How to pronounce my name?</a>
        <Tooltip
          id="my-tooltip-inline"
          place="bottom"
          style={{ backgroundColor: "rgb(255, 255, 255)", color: "#222" }}
        >
          <Name />
        </Tooltip>
      </div>
      <Photos/>
    </div>
  );
};

export default Home;
