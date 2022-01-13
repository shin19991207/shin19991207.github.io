import React, { Component } from 'react'
import classes from './Project.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Project extends Component {
  render() {
    return (
      <div className={classes.box} id="Project">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>STUFF THAT I MADE</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY PROJECTS</h2>
          <div className={classes.Project}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Etherea</h3>
                <p>Mobile application built with React Native frontend and Express backend that gamify challenges to give youth impactful opportunities to tackle the Sustainable Development Goals. Partnered with Etherea, a social enterprise based in Ontario. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Conference Management Application</h3>
                <p>An open-source desktop platform containing user identities and communication & event scheduling systems. Applied principles of object-oriented design and implemented a GUI with JavaFX framework in Java.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Doodle-Jump-like Game</h3>
                <p>An animated Doodle-Jump-like game with emulation of most of the original game’s features. Implemented the CPU instruction set with MIPS Assembly language and tested with a simulated environment within MARS. </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Project;