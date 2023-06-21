import React from "react";
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import OurStory from "./components/ourStory/OurStory";
import Wedding from "./components/wedding/Wedding";
import RSVP from "./components/rsvp/RSVP";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
   <>
   <Nav />
   <Home />
   <OurStory />
   <Wedding />
   <RSVP />
   <Gallery />
   <Contact />
   </>
  )
}

export default App;
