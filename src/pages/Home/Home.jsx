import React from "react";
import Layout from "../../components/Layout";
import Logo from "../../assets/RF_Logo.png";
import Parallax from "../../components/Parallax/Parallax.js";
import landingBG from "../../assets/img/landing-bg.jpg";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import SectionCarousel from "./SectionCarousel";
import CallTodayImage from "../../assets/Call_Today.png";
const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={landingBG}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h5 style={{ color: `white` }}>
                Here at Radianting Flooring we promote and install only premium
                tiles, laminates, hardwoods, and carpets. We pride ourselves in
                the highest level of customer satisfaction!
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main) + " bg-dark"}>
        <div className={classes.container + " p-3"}>
          <Grid container alignItems="center" alignContent="center">
            <GridItem xs={12} sm={6} className="p-3">
              <img src={Logo} alt="business logo" style={{ width: `100%` }} />
            </GridItem>
            <GridItem xs={12} sm={6} className="p-3">
              <div
                style={{
                  border: `6px`,
                  borderColor: `#cc9933`,
                  borderStyle: `solid`,
                }}
                className="p-3 rounded"
              >
                <h5 className="my-auto">
                  {" "}
                  The owners, Moises &amp; Andres, are skilled flooring
                  professionals and have a combined{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>20+ years experience</em>
                  </strong>{" "}
                  in the flooring business. My{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>professionalism</em>
                  </strong>{" "}
                  with{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>product knowledge</em>
                  </strong>{" "}
                  , installation expertise, and industry training has kept us
                  up-to-date on the latest trends in flooring sales,
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em> installation</em>
                  </strong>{" "}
                  , and{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>services</em>
                  </strong>{" "}
                </h5>
              </div>
            </GridItem>
          </Grid>
        </div>

        <div
          className="text-center bg-white py-3 mt-5"
          //style={{ marginTop: `150px` }}
        >
          <img
            src={CallTodayImage}
            alt="Call Today"
            style={{ minWidth: `50%`, maxWidth: `55%` }}
            className="mx-auto"
          />
        </div>

        <SectionCarousel />
      </div>
    </Layout>
  );
};

export default Home;
