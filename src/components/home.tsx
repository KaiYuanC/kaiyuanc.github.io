import Photos from "./photos";
import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h1>Hello! More information will soon be added here!</h1>
        <h1 style={{ fontSize: "2rem" }}>
          alkdsjfalksjdflkasjdflajsdlkfjalksdfjaklsdfjalksdjflaksf
          asdklfjasdlfkjasldkfjalskdfja;lsdjfakl;sdf askldfjalskdjf;alsdjfa;klsd
          akldsfja;lkdjfalkjdfklajsdfklasjdklf;aj
          aldkfja;lkdsfjal;kdjfal;ksdjflkajdfklajsklf;alkdsjfalksjdflkasjdfl
          ajsdlkfjalksdfjaklsdfjalksdjflaksflkajdflk
        </h1>
        <h1 style={{ fontSize: "1rem", paddingBottom: "100px" }}>
          alkdsjfalksjdflkasjdflajsdlkfjalksdfjaklsdfjalksdjflaksf
          asdklfjasdlfkjasldkfjalskdfja;lsdjfakl;sdf askldfjalskdjf;alsdjfa;klsd
          akldsfja;lkdjfalkjdfklajsdfklasjdklf;aj
          aldkfja;lkdsfjal;kdjfal;ksdjflkajdfklajsklf;alkdsjfalksjdflkasjdfl
          ajsdlkfjalksdfjaklsdfjalksdjflaksflkajdflk
        </h1>
      </div>
      <Photos />
    </div>
  );
};

export default Home;
