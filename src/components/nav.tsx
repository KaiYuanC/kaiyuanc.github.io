import React from "react";
import { links } from "./links.json";
import styles from "./nav.module.css";

/*
    - name is clickable to return top of page
*/

type Link = {
  label: string;
  href: string;
};

// take in a link as an arg array
const Links = () => {
  return (
    <div className={styles["links-container"]}>
      {links.map((link: Link) => {
        return (
          <div key={link.href} className={styles["link"]}>
            <a href={link.href}>{link.label}</a>
          </div>
        );
      })}
    </div>
  );
};

const Nav = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles["name-container"]}>
        <a href="#home">Kai Yuan Chi</a>
      </div>
      <Links />
    </nav>
  );
};

export default Nav;
