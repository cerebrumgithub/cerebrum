import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import EventFooter from "./EventFooter";

const PublicLayout = ({ children, haveFooter = true }) => {
  return (
    <>
    
      <Navbar />
      <main className="PublicLayout">{children}</main>
      <Footer />
      {/* {haveFooter ? (haveFooter == 'iba' ? <EventFooter /> : <Footer />) : null} */}
    </>
  );
};

export default PublicLayout;
