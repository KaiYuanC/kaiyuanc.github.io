import Image from "next/image";
import React from "react";
import p1 from "../../public/p1.png";
import styles from "./photos.module.css";

/*
  TODO: Add randomized photo when website is rendered :D
*/

const Photos = () => {
  return (
    <div className={styles.photos}>
      <Image
        className={styles.profilePic}
        src={p1}
        alt="Kai Yuan Chi"
      />
    </div>
  );
};

export default Photos;
