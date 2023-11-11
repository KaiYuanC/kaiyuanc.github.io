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
        <h1>
          Hello! I'm Kai Yuan, I also go by Kai.  <br></br>
          Recently, I finished my undergrad in Computer Science at University of Waterloo.
        </h1>
        <h1 style={{ fontSize: "1.5rem" }}>
          Aadlkfjalsdkfa <br></br>
          adifjaslkdfjaklsdjfklajsdfklajsdlkfjalksdjfka kdsajflksdf  <br></br>
          adskfjasdkf jkahdfkajsdfhakdfkajdfa djkahsfjasdfkj  <br></br>
          asdfjkahsdf ajkfhakjsdfhakj akjdhfkjahdfj  <br></br>
          adkfjakdjf ajkdshfakjsfh j ajkdhfkjashdfkj asdf jaksdhf kjas<br></br>
          asjdkfhadf akjsdfhakjshfakjd<br></br>
        </h1>
        <Link href={'https://www.linkedin.com/in/kaiyuan-chi/'} rel="noopener noreferrer" target="_blank">Linkedin</Link>
        <Link href={'https://github.com/KaiYuanC'} rel="noopener noreferrer" target="_blank">Github</Link>
        <Link href={'mailto:kaiyuanchi.make@gmail.com'}>Email</Link>
        <Link href={'#moments'}>What I'm up to?</Link>
        <Link href={''}>How to pronounce my name?</Link>
      </div>
      <Photos />
    </div>
  );
};

export default Home;
