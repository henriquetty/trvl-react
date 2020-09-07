import React from "react";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default Homepage;
