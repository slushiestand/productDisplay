import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import speakerImg from "assets/img/speakers/music.png";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

import { speakers } from "data/speakers.js";

const harmanSpeakers = speakers.filter(speaker => speaker.company === "Harman")

const competitiveSpeakers = speakers.filter(speaker => speaker.company === "competitor")

const useStyles = makeStyles(styles);

export default function Products() {
    const [show, setShow] = useState(false)
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Compare Products</h2>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain onClick={() => setShow(!show)}>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={speakerImg} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Speakers
                            <br />
                                <small className={classes.smallTitle}>Model</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    click to see ours vs theirs
                                </p>
                            </CardBody>
                        </Card>
                    </GridItem>
                    {show &&
                        <GridItem xs={12} sm={12} md={4}>
                            <Card plain>
                                <CardBody>
                                    <div className={classes.flexRow}>
                                        <div className={classes.flexCol}>
                                            <h3>Harman</h3>
                                            <p className={classes.description}>
                                                {harmanSpeakers.map(speaker => {
                                                    return (
                                                        <ul>
                                                            <li>{speaker.productId}</li>
                                                            <li>{speaker.qualityLevel}</li>
                                                        </ul>
                                                    )
                                                })}
                                            </p>
                                        </div>
                                        <div className={classes.flexCol}>
                                            <h3>Competitors</h3>
                                            <p className={classes.description}>
                                                {competitiveSpeakers.map(speaker => {
                                                    return (
                                                        <ul>
                                                            <li>{speaker.productId}</li>
                                                            <li>{speaker.qualityLevel}</li>
                                                        </ul>
                                                    )
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </GridItem>
                    }
                    {/* <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={team3} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Kendall Jenner
                            <br />
                                <small className={classes.smallTitle}>Model</small>
                            </h4>
                            <CardBody>
                                <p className={classes.description}>
                                    You can write here details about one of your team members. You
                                    can give more details about what they do. Feel free to add
                                    some <a href="#pablo">links</a> for people to be able to
                                    follow them outside the site.
                                </p>
                            </CardBody>
                            <CardFooter className={classes.justifyCenter}>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-twitter"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-instagram"} />
                                </Button>
                                <Button
                                    justIcon
                                    color="transparent"
                                    className={classes.margin5}
                                >
                                    <i className={classes.socials + " fab fa-facebook"} />
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem> */}
                </GridContainer>
            </div>
        </div>
    );
}
