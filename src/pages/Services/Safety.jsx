import React from "react";
import Layout from "../../components/Layout";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax.js";
import Banner from "../../assets/img/glossary.jpg";

const useStyles = makeStyles(styles);

const HardWoodFloor = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={Banner}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Everything You <i>"Wood"</i> Need</h1>
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
                    <em>Pallet Safety</em>
                  </strong>{" "}
                  <br />From receiving product at your back door to moving items internally, pallets are part of a warehouse daily life.  Since they are so commonplace, employees don’t always think about proper safety steps in the handling or use of pallets.  Below are a few safety tips to remember when using pallets in your operation.
                </h5>
              </div>
            </GridItem>
            <GridItem xs={12}>
            <h2 align="center" className="color-primary mt-5"><b>Wood Pallet Safety</b></h2>
<ul>
<li>Look at the pallet before you pick it up to make sure no nails are sticking out.  Rusty nails, typically found in wood pallets, can puncture the skin causing Tetanus.</li>
<li>Use gloves when handling and stacking older, seasoned pallets to prevent cuts and punctures from slivers.</li>
<li>Never walk across the top of a wood pallet.  There may be protruding nails, or the boards might collapse.</li>
<li>Dispose of broken, heavily used pallets.</li>
</ul>
<h2 align="center" className="color-primary"><b>Moving Pallets</b></h2>
<p>Wood and plastic pallets can weigh between 50 to 100 pounds each, depending on construction.</p>
<ul>
<li>Use good posture when manually handling pallets.  Maintain the back’s natural “S” curve while moving and stacking pallets.</li>
<li>Use a pallet jack to move pallets from one point to the next.  If you must move them manually, stand them on edge and slide.</li>
<li>Do not throw pallets – you might damage the pallet or cause injury to yourself.</li>
</ul>
<h2 align="center" className="color-primary"><b>How to Store Pallets</b></h2>
<ul>
<li>Never store a pallet standing up on its side.  Always lay pallets flat on the ground or in stacks.   A falling pallet can hurt someone walking or working nearby.</li>
<li>Lay the first pallet of a stack flat on the ground, and slide the next one to the side of the stack.  Using proper lifting motion, slide the pallet up the side of the stack and onto the top.</li>
<li>Don’t manually stack pallets more than 7 or 8 high – use forklifts to make stacks higher.</li>
</ul>
<h2 align="center" className="color-primary"><b>Merchandising with Pallets</b></h2>
<ul>
<li>Check pallets that are used for floor displays.  Exposed nails and damaged corners contribute to customer cuts.  Use pallet guards for displays with exposed corners (occurs when there is an octagon jitney on a square pallet)</li>
</ul>
<p>Pallets are used on a daily basis; therefore, it requires awareness by all employees of these safety tips.  Pallet safety will then become a part of your operation’s routine risk management practices.</p>
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
