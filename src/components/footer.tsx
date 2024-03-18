import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr className="my-8 h-px border-t-0 bg-black" />
      <div className={styles.title}></div>
      <h1>Exemplary persons are not mere vessels.</h1>
      <br></br>
      <h1>- Confucius</h1>
    </div>
  );
};

export default Footer;
