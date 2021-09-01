import React from "react";
import Layout from "../../components/Layout";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax.js";
import Banner from "../../assets/img/banner-flooring.jpg";
import Pallets from "../../assets/img/pallet-style.jpg";

const useStyles = makeStyles(styles);

const Types = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={Banner}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Pallet Types</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main) + " bg-dark"}>
        <div className={classes.container + " p-3"}>
          <Grid container alignItems="center" alignContent="center">
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
                There are many pallet types to choose from. Below are the most common types available. Use this as a guide when ordering your pallets.
                </h5>
              </div>
            </GridItem>
            <GridItem className="p-3" xs={12}>
                <img src={Pallets} className="w-100 img-fluid rounded shadow-lg" alt="Pallet Styles"/>
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

export default Types;
