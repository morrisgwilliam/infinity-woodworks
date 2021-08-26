import React from "react";
import Layout from "../../components/Layout";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax.js";
import Banner from "../../assets/img/banner-hardwood-flooring.jpg";

const useStyles = makeStyles(styles);

const HardWoodFloor = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={Banner}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Hardwood Floor Installation</h1>
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
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>Genuine hardwood flooring</em>
                  </strong>{" "}
                  is a statement piece in its own right. Wood flooring adds a
                  tasteful touch of elegance and sophistication to living rooms,
                  bedrooms, and other areas of the home. When it comes to
                  hardwood floor installation, we pay close{" "}
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em>attention to detail</em>
                  </strong>{" "}
                  to ensure your floors have a level and seamless finish.
                  <strong style={{ color: `#cc9933`, fontSize: `1.5rem` }}>
                    <em> Schedule a flooring consultation today</em>
                  </strong>{" "}
                  to view our selection of hardwood flooring samples.
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
