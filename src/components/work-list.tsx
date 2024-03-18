import Link from "next/link";
import React from "react";
import { items } from "./work-list-items.json";
import styles from "./work-list.module.css";

type WorkItem = {
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
      {items.map((item: WorkItem) => {
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


const WorkList = () => {
  return (
    <div className={styles.worklist}>
    <Items />
    <div className={styles.title}>Work & Internship</div>
    </div>
  );
};

export default WorkList;
