import React from 'react';
import './Course.css';
import {Button, Collapse, FormCheckbox, Card, CardBody, Link} from 'shards-react';
import './typography.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDifficulty = this.toggleDifficulty.bind(this);
        this.toggleRecommend = this.toggleRecommend.bind(this);

        this.toggleFirstLineOpen = this.toggleFirstLineOpen.bind(this);


        this.state = { 
            collapseDifficulty: false,
            collapseRecommend: false,
            isFirstLineOpen: false,
            isSecondLineInfoOpen: false,
            openReview: "", };
    }

    toggleFirstLineOpen(x) {
        console.log("x was ", x);
        if (x === this.state.openReview && this.state.isFirstLineOpen) {
            this.setState({isFirstLineOpen: false, openReview: "",});
        }
        else {
            this.setState({ openReview: x, isFirstLineOpen: true });
        }
    }

    toggleDifficulty() {
        this.setState({ collapseDifficulty: !this.state.collapseDifficulty });
    }
    toggleRecommend() {
        this.setState({ collapseRecommend: !this.state.collapseRecommend });
    }

    render() {
        return (
            <div class='container'>
                <div class='information'>    
                    <h1><b>CS 116:</b> Introduction to Computer Science 2</h1>        
                    <p>This course builds on the techniques and patterns learned in CS 115 while making the transition to use of an imperative language. Generative and structural recursion. Mutation (assignment) and its role in an imperative language. Primitive types and basic I/O. Sequencing, selection, looping. Function definition and use. File and console I/O. Issues in computer science. [Offered: F,W,S]</p>
                </div>
                <div class='requirements'>
                    <div>
                        <b>Prerequisites</b>
                        <div class='prerequisites'>
                            <ul>
                                <li><FormCheckbox checked={true}>CS115</FormCheckbox></li>
                                <li><FormCheckbox>CS231</FormCheckbox></li>
                            </ul>
                        </div>
                    </div>
                    <div class='component'>
                        <b>Antirequisites</b>
                        <div class='prerequisites'>
                            <ul>
                                <li><FormCheckbox checked={true}>CS115</FormCheckbox></li>
                                <li><FormCheckbox>CS231</FormCheckbox></li>
                            </ul>
                        </div>
                    </div>
                    <div class='component'>
                        <b>Fulfills these requirements:</b>
                        <ul>
                            <li>4 CS courses</li>
                            <li>3rd course in prerequisite chain of 4</li>
                            <li>4/4 breadth courses</li>
                        </ul>
                    </div>
                </div>
                <h3>Past Student Feedback</h3>
                <div class='card-container feedback-row feedback-top'>
                    <div className='card feedback-card' onClick={() => this.toggleFirstLineOpen("difficulty")}>
                        Difficulty
                        <div class="rating">Average</div>
                        <div class="small-text">65% of 133 ratings</div>
                    </div>

                    <div className='card feedback-card' onClick={() => this.toggleFirstLineOpen("recommended")}>
                        Recommended
                        <div class="rating">Yes</div>
                        <div class="small-text">60% of 112 ratings</div>
                    </div>
                </div>

                <div className={'feedback-info ' + (this.state.isFirstLineOpen ? "show" : "hide")}>
                    aldkfa
                </div>

                <div class='comments'>
                    <h3>
                        Comments
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
                <div>
                    <h2>
                        Instructors
                    </h2>
                    <h4>
                        Winter 2020 Professors
                    </h4>
                        <div class='professor'>
                        <p><b>
                            Prof Name
                        </b></p>
                        <div class='profInfo'>
                            <div class='engaging'>
                                <p>
                                    Engaging
                                </p>
                                <p class='info'>
                                    Yes
                                </p>
                            </div>
                            <div class='engaging'>
                                <p>
                                    Clarity
                                </p>
                                <p class='info'>
                                    Decent
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div>
                    <h2>
                        Textbooks
                    </h2>
                    <div class='textbooks'>
                        <Card>
                            <CardBody>
                                Textbook <br></br>
                                3rd Edition<br></br>
                                $25
                                </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                Textbook <br></br>
                                3rd Edition<br></br>
                                $25
                                </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                Textbook <br></br>
                                3rd Edition<br></br>
                                $25
                                </CardBody>
                        </Card>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}