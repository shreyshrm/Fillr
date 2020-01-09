import React from 'react';
import logo from './logo.svg';
import profilepicture from './profilepicture.svg'
import degree from './Degree.svg'
import star from './star.svg'
import gift from './gift.svg'
import bullet from './bullet.svg'
import './App.css';
import Course from './Course';
import {Button, Card, CardBody, CardTitle, FormInput} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div>
      <div class='header'>
      <div class='headerContainer'>
        <img src={logo} />
        <div>
          <Button pill>View Completed Courses</Button>
          <img src={profilepicture} class='profilepic'/>
        </div>
      </div>
      <Card className='cardbody'>
        <CardBody>
          <CardTitle>Search for courses to take</CardTitle>
          <div className='form'>
            <FormInput className='searchbox' placeholder="Small input" />
            <Button pill>Search</Button>
          </div>
        </CardBody>
      </Card>
     </div>
     <div class='body'>
       <div class='body-header'>
         <h2>Not sure what to take?</h2>
         <h2><b>Explore courses by category</b></h2>
       </div>
       <div class='body-content'>
         <Card className='body-content-card'>
           <CardBody>
              <img src={degree} />
              <p className='p'>
              Courses to fulfill your degree requirements
              </p>
           </CardBody>
         </Card>
         <Card className='body-content-card'>
           <CardBody>
            <img src={star} />
              <p className='p'>
                Popular Electives
              </p>
           </CardBody>
         </Card>
         <Card className='body-content-card'>
           <CardBody>
            <img src={gift} />
            <p className='p'>
              Bird Courses 
            </p>
           </CardBody>
         </Card>
         <Card className='body-content-card'>
           <CardBody>
            <img src={bullet} />
            <p className='p'>
              Browse all courses 
            </p>
           </CardBody>
         </Card>
       </div>
     </div>
    </div>
  );
}

export default App;
