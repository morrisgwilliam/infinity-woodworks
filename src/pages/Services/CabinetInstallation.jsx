import React from "react";
import Layout from "../../components/Layout";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax.js";
import Banner from "../../assets/img/banner-cabinet-install.jpg";

const useStyles = makeStyles(styles);

const HardWoodFloor = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={Banner}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Cabinet Installation</h1>
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
                  Ample storage space is a necessity for homes of all sizes. Our
                  cabinet installation service ensures you have a place for all
                  of your belongings. When you hire us to install wood flooring
                  and{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>cabinetry in your home</em>
                  </strong>
                  , you have the option to match the stain of your cabinets to
                  your floors. You can also take advantage of our{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>affordable painting services</em>
                  </strong>{" "}
                  and add a splash of color to your cabinets and drawers.{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>Contact us at (909) 634-6145</em>
                  </strong>{" "}
                  for more information on our{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>custom cabinetry options</em>
                  </strong>
                  .
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
