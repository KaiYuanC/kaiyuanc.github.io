import React from "react";
import styles from "./name.module.css";

// Good to have:
// add actual voice over

const Name = () => {
  return (
    <div className={styles.name}>
        <h3><b>Kai</b> : with 'ai' in Kite</h3>  
        <h3><b>Yuan</b> : pronounced as 'You-one'</h3>  
        <h3><b>Chi</b> : with 'chi' in Chia seeds, is my last name.</h3>  
        <h3>Feel free to call me KaiYuan, or Kai</h3>
        <h3>My pronouns are <b>She/Her/Hers</b></h3>
    </div>
  );
};

export default Name;
