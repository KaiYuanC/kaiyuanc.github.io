import Link from 'next/link'
import Photos from "./photos";
import React from "react";
import styles from "./home.module.css";

/*
  TODO: 
  - add small icon to href links
  - complete contents
  - check mobile version
*/
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
        <Link href={'https://www.linkedin.com/in/kaiyuan-chi/'} rel="noopener noreferrer" target="_blank">Linkedin</Link>
        <Link href={'https://github.com/KaiYuanC'} rel="noopener noreferrer" target="_blank">Github</Link>
        <Link href={'mailto:kaiyuanchi.make@gmail.com'}>Email</Link>
        <Link href={''}>Some moments in my life</Link>
        <Link href={''}>How to pronounce my name?</Link>
      </div>
      <Photos />
    </div>
  );
};

export default Home;
