import React, { useEffect } from "react";
import Gallery from "./event-single-page/Gallery";
import SimilarEvents from "./event-single-page/SimilarEvents";

//components
import SingleNavbar from "./event-single-page/SingleNavbar";
import Spotlight from "./event-single-page/Spotlight";
import Footer from "./includes/Footer";

export default function SinglePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SingleNavbar />
      <Spotlight />
      <Gallery />
      <SimilarEvents />
      <Footer />
    </div>
  );
}
