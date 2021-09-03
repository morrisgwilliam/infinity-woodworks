import React from "react";
import Layout from "../../components/Layout";
import Parallax from "../../components/Parallax/Parallax.js";
import landingBG from "../../assets/img/landing-bg.jpg";
import SectionImage from "../../assets/img/Home-Image.jpg";
import PremiumQuality from "../../assets/img/premium-quality.png";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import SectionCarousel from "./SectionCarousel";
import QuoteForm from "./QuoteForm";
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
                Here at <span className="color-primary">Infinity Woodworks</span> we promote and install pallets of all sizes. We pride ourselves in
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
              <img src={PremiumQuality} alt="top quality" className="rounded" style={{ width: `100%` }} />
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
                  At Infinity Woodworks, you will find{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>20+ years experience</em>
                  </strong>{" "}
                  in the pallet business. Our{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>professionalism</em>
                  </strong>{" "}
                  with{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>product knowledge</em>
                  </strong>{" "}
                   has kept us
                  up-to-date on the latest trends!
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
            src={SectionImage}
            alt="Call Today"
            style={{ minWidth: `50%`, maxWidth: `55%` }}
            className="mx-auto rounded shadow"
          />
        </div>
        <QuoteForm />
        <SectionCarousel />
      </div>
    </Layout>
  );
};

export default Home;
