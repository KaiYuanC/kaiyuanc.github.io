import Link from "next/link";
import React from "react";
import { items } from "./project-list-items.json";
import styles from "./project-list.module.css";

type ProjectItem = {
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
      {items.map((item: ProjectItem) => {
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


const ProjectList = () => {
  return (
    <div className={styles.projectlist}>
    <Items />
    <div className={styles.title}>Project</div>
    </div>
  );
};

export default ProjectList;
