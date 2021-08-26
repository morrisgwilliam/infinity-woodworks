import React from "react";
import Layout from "../../components/Layout";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax.js";
import Banner from "../../assets/img/banner-painting.jpg";

const useStyles = makeStyles(styles);

const HardWoodFloor = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={Banner}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Painting Services</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main) + " bg-dark"}>
        <div className={classes.container + " p-3"}>
          <Grid container alignItems="center" alignContent="center">
            <GridItem xs={12} sm={6} className="p-3">
              <div className="circle-image service-flooring"></div>
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
                  With our combined{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>flooring and painting services</em>
                  </strong>
                  , you don't have to hire multiple contractors for home
                  renovations. We'll connect you with a painter who will help
                  you develop a color palette that complements your new floors.
                  Along with{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>standard wall and ceiling painting</em>
                  </strong>
                  , we manage baseboard and crown molding painting. All these
                  services, and more, are available to homeowners in{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>Pomona, CA</em>
                  </strong>
                  , and the surrounding areas.
                </h5>
              </div>
            </GridItem>
          </Grid>
        </div>

        <div
          className="text-center bg-white py-3 mt-5"
          //style={{ marginTop: `150px` }}
        ></div>
      </div>
    </Layout>
  );
};

export default HardWoodFloor;
