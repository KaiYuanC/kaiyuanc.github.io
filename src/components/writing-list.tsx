import Link from "next/link";
import React from "react";
import { items } from "./writing-list-items.json";
import styles from "./writing-list.module.css";

type WritingItem = {
  date: string;
  type: string;
  title: string;
  description: string | undefined;
  link: string | undefined;
  linkText: string | undefined;
};

const Items = () => {
  return (
    <div className={styles.itemsblock}>
      {items.map((item: WritingItem) => {
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
            </div>
          </div>
        );
      })}
    </div>
  );
};


const WritingList = () => {
  return (
    <div className={styles.writinglist}>
    <Items />
    <div className={styles.title}>Writing</div>
    </div>
  );
};

export default WritingList;
