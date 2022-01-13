import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 
import pdf from '../images/morganchang_resume.pdf';

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Welcome to my portfolio!</h2>
                    <div className={classes.About}>
                        <p> Hello, my name is Morgan Chang. I'm currently a 3rd year undergraduate in Computer Science Specialist and Statistics Minor at the University of Toronto St. George. </p>
                         <p className={classes.br}>Outside of school, I enjoy reading, writing, photographys, tea making and piano playing. On top of that, I'm an amateur instagram food blogger where I write food and restaurant reviews <a className={classes.link} target="_blank" href="https://www.instagram.com/morganchang_eats/">here</a> :). </p>
                         <p className={classes.br}>If you'd like to read a bit more about my time as an undergrad so far and my work with student groups and such, feel free to check out my resume! </p>
                         <a href={pdf} target = "_blank"><button className={classes.resume}>Resume / CV</button></a>  
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;