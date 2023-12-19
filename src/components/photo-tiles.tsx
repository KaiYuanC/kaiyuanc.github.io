import Image from "next/image";
import React from "react";
import styles from "./photo-tile.module.css";
import test2 from "../../public/test2.png";

const PhotoTile = () => {
  return (
    <div className={styles.tile}>
      <Image
        className={styles.image}
        src={test2}
        alt="Kai Yuan Chi"
      />
      <Image
        className={styles.image}
        src={test2}
        alt="Kai Yuan Chi"
      />
      <Image
        className={styles.image}
        src={test2}
        alt="Kai Yuan Chi"
      />
    </div>
  );
};

export default PhotoTile;
