import React from "react";

import { About, Header, Skills, Testimonial, Work, Contact } from "./container";
import { Navbar, Footer } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />

    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <About />
    <Contact />
    <Footer />
  </div>
);

export default App;
