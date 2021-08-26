/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Star, ContactPhone } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link
              to="/services/hardwood-floor-installation"
              className={classes.dropdownLink}
            >
              Hardwood Floor Installation
            </Link>,
            <Link
              to="/services/tile-installation"
              className={classes.dropdownLink}
            >
              Tile Installation
            </Link>,
            <Link
              to="/services/flooring-installation"
              className={classes.dropdownLink}
            >
              Flooring Installation
            </Link>,
            <Link
              to="/services/painting-services"
              className={classes.dropdownLink}
            >
              Painting Services
            </Link>,
            <Link
              to="/services/cabinet-installation"
              className={classes.dropdownLink}
            >
              Cabinet Installation
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.yelp.com/biz/radianting-flooring-and-installation-pomona"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-yelp mr-2"} />
          Yelp
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.facebook.com/RadiantingFlooring/"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-facebook mr-2"} />
          Facebook
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.instagram.com/radiantingflooring/"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-instagram mr-2"} />
          Instagram
        </Button>
      </ListItem>
    </List>
  );
}
