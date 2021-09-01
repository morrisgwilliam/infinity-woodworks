import React from "react";
import Layout from "../../components/Layout";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import classNames from "classnames";
import { Grid } from "@material-ui/core";
import Parallax from "../../components/Parallax/Parallax.js";
import Banner from "../../assets/img/woods.jpg";

const useStyles = makeStyles(styles);

const HardWoodFloor = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props}>
      <Parallax filter image={Banner}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Glossary</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main) + " bg-dark"}>
        <div className={classes.container + " p-3"}>
          <Grid container alignItems="center" alignContent="center">
            <GridItem xs={12} className="p-3">
            <p><b>Annular Nail </b>&#8211; Pallet nail with annular (circular ring) threads rolled onto the shank</p>
<p><b>Banding Notch </b>&#8211; See <i>Strap Slot</i></p>
<p><b>Bin </b>&#8211; Four-sided superstructure to be mounted on a pallet base, with or without a cover; also known as a box or container bin pallet</p>
<p><b>Block </b>-Rectangular, square or cylindrical deck spacer, often identified by its location within the pallet as corner block, end block, edge block, inner block, center or middle blocks</p>
<p><b>Block Pallet </b>&#8211; A type of pallet with blocks between the pallet decks or beneath the top deck</p>
<p><b>Butted Deckboard </b>&#8211; An inner deckboard placed tightly against an adjacent lead deckboard during pallet assembly</p>
<p><b>Bottom Deck </b>&#8211; Assembly of deckboards comprising the lower, load bearing surface of the pallet</p>
<p><b>Captive Pallet </b>&#8211; A pallet intended for use within the confines of a single facility, system or ownership; not intended to be exchanged</p>
<p><b>Chamfered Deckboards </b>&#8211; Deckboards with edges of one or two faces beveled, either along the full or specified length of board or between the stringers of blocks, allowing easier entry of pallet jack wheels</p>
<p><b>Closed distribution system </b>&#8211; Shipping system restricted to moving goods between specified plants and facilities</p>
<p><b>Cost-Pass-Through </b>&#8211; A cost-share system where the partial cost of a pallet is passed-through from the purchaser to the receiver of the pallet</p>
<p><b>Cost-Per-Trip </b>&#8211; Average cost of pallet use for a single one-way trip</p>
<p><b>Deck </b>&#8211; One or more boards or panels comprising the top or bottom surface of the pallet</p>
<p><b>Deck Mat </b>&#8211; Assembly of deckboards and stringerboards, forming the deck of a block pallet</p>
<p><b>Deckboard </b>&#8211; Element or component of a pallet deck, oriented perpendicular to the stringer or stringerboard</p>
<p><b>Deckboard Spacing </b>&#8211; Distance between adjacent deckboards</p>
<p><b>Deckboard Span </b>&#8211; Distance between deckboard supports (stringers, stringerboards or blocks)</p>
<p><b>Deflection </b>&#8211; The amount of deformation or bending in a pallet or pallet component under load</p>
<p><b>Double-Face Pallet </b>&#8211; A pallet with top and bottom decks</p>
<p><b>Double-Wing Pallet </b>&#8211; A pallet with top and bottom deckboards extending beyond the edges of the stringers or stringerboards</p>
<p><b>Drive Screw Nail </b>&#8211; Helically (continuous spiral) threaded pallet nail</p>
<p><b>Economic Life </b>&#8211; Output from PDS© program which identifies the number of trips the pallet will make, provided it is properly repaired, which maximizes a return on investment</p>
<p><b>Exchange Pallet </b>&#8211; A pallet intended for use among a designated group of shippers and receivers where ownership of the pallet is transferred with the ownership of the unit load; common pool pallet</p>
<p><b>Expendable Pallet </b>&#8211; A pallet intended for a series of handlings during a single trip from shipper to receiver; it is then disposed; see <i>Shipping Pallet</i></p>
<p><b>Fastener </b>&#8211; A mechanical device for joining pallet components such as nails, staples, bolts or screws</p>
<p><b>Flush Pallet </b>&#8211; A pallet with deckboards flush with the stringers, stringer-boards or blocks along the sides of the pallet</p>
<p><b>Fork Entry </b>&#8211; Opening between decks, beneath the top deck or beneath the stringer notch to admit forks</p>
<p><b>Four-Way Block Pallet </b>&#8211; A pallet with openings at both pallet ends and along pallet sides sufficient to admit hand-pallet jacks; full four-way entry pallet</p>
<p><b>Free Span </b>&#8211; The distance between supports in a warehouse rack</p>
<p><b>Hand (Wheel) Jack Opening </b>&#8211; Space provided in the bottom deck to allow pallet jack wheels to bear on the floor</p>
<p><b>Handling </b>&#8211; A single pick-up, movement and set-down of a loaded or empty pallet</p>
<p><b>Hardened-Steel Nail </b>&#8211; Heat-treated and tempered steel pallet nail with a MIBANT angle between 8 and 28 degrees</p>
<p><b>Hardwood </b>&#8211; Wood from broad-leaved species of trees (not necessarily hard or dense)</p>
<p><b>Helical Nail </b>&#8211; Helically (continuous spiral) threaded pallet nail, see also <i>Drive Screw Nail</i></p>
<p><b>Inner Deckboard </b>&#8211; Any deckboard located between the end deckboards</p>
<p><b>Joint </b>&#8211; Intersection and connection of components, often identified by location within the pallet as the end joint, center joint and corner joint</p>
<p><b>Length </b>&#8211; Refers to the stringer or stringerboard (in block pallets) length; also refers to the first dimension given to describe a pallet i.e., 48&#8243; x 40&#8243;, where 48&#8243; is the pallet stringer/stringerboard length</p>
<p><b>Nail </b>&#8211; Fastener made from endless wire by cutting a point and forming a head at the shank end opposite the point</p>
<p><b>Non-Reversible Pallet </b>&#8211; A pallet with bottom deckboard configuration different from top deck</p>
<p><b>Notch </b>&#8211; Cutout in lower portion of the stringer to allow entry for the fork tine, usually 9&#8243; in length, 1 1/2&#8243; in depth</p>
<p><b>Notched Stringer</b> &#8211; A stringer with two notches spaced for fork-tine entry, (partial four-way entry)</p>
<p><b>Opening Height </b>&#8211; The vertical distance measured between decks, from the floor to the underside of the top deck, or from the floor to the top of the stringer notch</p>
<p><b>Overall Height </b>&#8211; The vertical distance measured from the floor to the top side of the top deck</p>
<p><b>Overhang </b>&#8211; The distance the deck extends from the outer edge of the stringer or stringerboard; wing; lip; distance the unit load extends beyond the deck</p>
<p><b>Pallet </b>&#8211; A portable, horizontal, rigid platform used as a base for assembling, storing, stacking, handling and transporting goods as a unit load, often equipped with a superstructure</p>
<p><b>Pallet Dimensions </b>&#8211; When specifying pallet size, the stringer or stringerboard (block pallet) length is always expressed first; for example, a 48&#8243; x 40&#8243; pallet has a 48&#8243; stringer or stringerboard and 40&#8243; deckboards</p>
<p><b>Pallet Life</b><b> </b>&#8211; The period during which the pallet remains useful, expressed in units of time or in the number of one-way trips</p>
<p><b>Partial Four-Way Stringer Pallet </b>&#8211; A pallet with notched stringers</p>
<p><b>Post</b> <b>Pallet</b><b> </b>&#8211; A pallet fitted with posts or blocks between the decks or beneath the top deck; see <i>block pallet</i></p>
<p><b>Repair</b> &#8211; To remake in order to use again</p>
<p><b>Recycling </b>&#8211; A pallet, container or reel that has been used, discarded, salvaged, repaired and which passes through a cycle again</p>
<p><b>Returnable</b><b>/Reusable Pallet</b><b> </b>&#8211; A pallet designed to be used for more than one trip</p>
<p><b>Reversible</b> &#8211; A pallet with identical top and bottom decks</p>
<p><b>Shipping Pallet</b><b> </b>&#8211; Pallet designed to be used for a single one-way trip from shipper to receiver; it is then disposed; see <i>Expendable Pallet</i></p>
<p><b>Single-Wing Pallet</b> &#8211; A pallet with the top deckboards extending beyond the edges of the stringers or stringer-boards with the bottom deckboards flush (if present)</p>
<p><b>Skid</b> &#8211; A pallet having no bottom deck</p>
<p><b>Slave Pallet </b>&#8211; Pallet, platform or single, thick panel used as a support base for a palletized load in rack-storage facilities or production systems</p>
<p><b>Softwood </b>&#8211; Wood from coniferous or needle-bearing trees (not necessarily soft or low density)</p>
<p><b>Solid Deck Pallet </b>&#8211; A pallet constructed with no spacing between deckboards</p>
<p><b>Strap Slot </b>&#8211; Recess or cutout on the upper edge of the stringer or the bottom of the top deckboard to allow tie-down of a unit load to the pallet deck with strapping/banding, also called the banding notch</p>
<p><b>Strapping </b>&#8211; Thin flat bands used to secure load to pallet</p>
<p><b>Stringer </b>&#8211; Continuous, longitudinal, solid or notched beam-component of the pallet used to support deck components, often identified by location as the outside or center stringer</p>
<p><b>Stringerboard </b>&#8211; In block pallets, continuous, solid board member extending for the full length of the pallet perpendicular to deckboard members and placed between deckboards and blocks</p>
<p><b>Top Cap </b>&#8211; Panel to be placed on top of a unit load to allow for tight strapping without damaging the unit load</p>
<p><b>Top-Deck of the Pallet </b>&#8211; The assembly of deckboards comprising the upper load-carrying surface of the pallet</p>
<p><b>Trip </b>&#8211; Consists of four to six handlings of a pallet</p>
<p><b>Two-Way </b>Entry <b>Pallet </b>&#8211; A pallet with un-notched solid stringers allowing entry only from the ends</p>
<p><b>Unit Load </b>&#8211; Assembly of goods on a pallet for handling, moving, storing and stacking as a single entity</p>
<p><b>Warehouse Pallet </b>&#8211; A double-face multiple trip returnable pallet intended for</p>
<p>general warehouse use</p>
<p><b>Wing </b>&#8211; Overhang of deckboard end from outside edge of stringer or stringer-board</p>
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
