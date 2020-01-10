import React from 'react';
import './Course.css';
import {Button, Collapse, FormCheckbox, Card, CardBody, Link} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDifficulty = this.toggleDifficulty.bind(this);
        this.toggleRecommend = this.toggleRecommend.bind(this);
        this.state = { collapseDifficulty: false,
        collapseRecommend: false };
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
                    <h1>Course Code</h1>        
                    <p>Course description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div class='requirements'>
                    <div>
                        <p>Prerequisites</p>
                        <div class='prerequisites'>
                            <p>
                                <FormCheckbox checked={true}>Prereq 1</FormCheckbox>
                            </p>
                            <FormCheckbox>Prereq 2</FormCheckbox>
                        </div>
                    </div>
                    <div class='component'>
                        <p>Fulfills your:</p>
                        <p>- Humanties Requirements</p>
                        <p>- Effective Requirements</p>
                        <p>- Breadth/Depth Requirements</p>
                    </div>
                </div>
                <h3>Past Student Feedback</h3>
                <div class='card-container'>
                    <div class='card'>
                        <Button onClick={this.toggleDifficulty}>Difficulty</Button>
                        <Collapse open={this.state.collapseDifficulty}>
                        <div className="p-3 mt-3 border rounded">
                            <h5>😍 Now you see me!</h5>
                            <span>
                            In sagittis nibh non arcu viverra, nec imperdiet quam suscipit.
                            Sed porta eleifend scelerisque. Vestibulum dapibus quis arcu a
                            facilisis.
                            </span>
                        </div>
                        </Collapse>
                    </div>
                    <div class='card'>
                        <Button onClick={this.toggleRecommend}>Recommended by</Button>
                        <Collapse open={this.state.collapseRecommend}>
                        <div className="p-3 mt-3 border rounded">
                            <h5>yoooo</h5>
                            <span>
                            You better take this course!
                            </span>
                        </div>
                        </Collapse>
                    </div>
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