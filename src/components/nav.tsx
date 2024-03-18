import Link from 'next/link'
import React from "react";
import { links } from "./links.json";
import styles from "./nav.module.css";

/*
    - name is clickable to return top of page
    - fix scrolling not completely to the top
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
            <Link href={link.href}>{link.label}</Link>
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
        <Link href="/">Kai Yuan Chi</Link>
      </div>
      <Links />
    </nav>
  );
};

export default Nav;
