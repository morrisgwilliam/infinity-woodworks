import React from "react";
// nodejs library that concatenates classes
// @material-ui/icons

// core components
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
// import Button from /CustomButtons/Button.js";
import HeaderLinks from "../Header/HeaderLinks.js";

const dashboardRoutes = [];

export default function LandingPage(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Radianting Flooring"
        rightLinks={<HeaderLinks {...props} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {props.children}
      <Footer />
    </div>
  );
}
