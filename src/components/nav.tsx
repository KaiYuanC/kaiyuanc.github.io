import React from "react";
import { links } from "./links.json";
import styles from "./nav.module.css";

/*
    - horizontal (name, horizontal(links hardcoded for now)) outside flux, inside fixed distance
    - bar stick to the top of page
    - name is clickable to return top of page
    - items selectable
*/
// links are reusable components, text, href location

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
      <div>Kai Yuan Chi</div>
      <Links />
    </nav>
  );
};

export default Nav;
