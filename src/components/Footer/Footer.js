/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Link } from "react-router-dom";

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/infinity-wood-works-76348a212/"
                className={classes.block + " primary-hover"}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-linkedin-in mr-2"} />
                LinkedIn
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.instagram.com/infinitywoodworkscorp/"
                className={classes.block + " primary-hover"}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-instagram mr-2"} />
                Instagram
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, made by{" "}
          <a
            href="https://www.morrisgwilliam.com"
            className={aClasses + " primary-hover"}
            target="_blank"
          >
            William Morris Web Services
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
