import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ data }) => {
  console.log(data);
  return (
    <>
      <Header />
      <div>{data}</div>
      <Footer />
    </>
  );
};

export default Layout;
