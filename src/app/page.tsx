import Footer from "../components/footer";
import Home from "../components/home";
import Nav from "../components/nav";
import React from "react";
import Timeline from "../components/timeline";

/*
  GOOD TO HAVE: dark mode! 
*/

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
