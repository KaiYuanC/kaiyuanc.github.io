import Footer from "../components/footer";
import Head from 'next/head'
import Home from "../components/home";
import Nav from "../components/nav";
import React from "react";

/*
  TODO: make your website searchable on google
  https://medium.com/@davegray_86804/next-js-how-to-submit-your-sitemap-to-google-36a859c4d114  
  GOOD TO HAVE: dark mode! 
*/

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
