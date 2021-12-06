import './App.css';
import React from 'react';
import { Player } from './player';
import { Page2 } from './page2';
import { Page3 } from './page3';
import { Page4 } from './page4';
import { Page5 } from './page5';
import { Page6 } from './page6';
import { Page7 } from './page7';
import { Page8 } from './page8';
import { Page9 } from './page9';
import { Page10 } from './page10';
import { Page11 } from './page11';
import { Page12 } from './page12';

import { Pagehowtoread } from './pagehowtoread';
import { Pagehowtoread2 } from './pagehowtoread2';

import { Pageforeword } from './pageforeword';









import Role from './pic/persona/Role.png';

// import Health1 from './pic/persona/Health1.png';
// import Health2 from './pic/persona/Health2.png';
import Health3 from './pic/persona/Health3.png';
import Health4 from './pic/persona/Health4.png';

// import Location1 from './pic/persona/Location1.png';
import Location3 from './pic/persona/Location3.png';
import Location4 from './pic/persona/Location4.png';


// import Gender1 from './pic/persona/Gender1.png';
import Gender3 from './pic/persona/Gender3.png';
import Gender4 from './pic/persona/Gender4.png';


// import Age1 from './pic/persona/Age1.png';
import Age3 from './pic/persona/Age3.png';
import Age4 from './pic/persona/Age4.png';









class App extends React.Component {



  state = {
    img1: require('./pic/persona/Health1.png').default,
    img2: require('./pic/persona/Age1.png').default,
    img3: require('./pic/persona/Location1.png').default,
    img4: require('./pic/persona/Gender1.png').default,
    health4opacity: 0,
    age4opacity: 0,
    gender4opacity: 0,
    location4opacity: 0


  }

  render() {


    return (
      <div className="App">

        <Player />
        <div className="Section" id="section">
          <div className="Section__item cover">
            <Pageforeword />


          </div>
          <div className="Section__item aboutme">
            <Pagehowtoread />
          </div>
          <div className="Section__item howtoreadme2">
            <Pagehowtoread2 />
          </div>

          <div className="Section__item bg-1">

            <img src={Role} alt="Role"
              style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }}
            />

            <img src={this.state.img1} alt="Health1" className='Health1'
              style={{ width: "180px", position: 'absolute', top: '51%', left: '-15%' }}
              onMouseEnter={() => {

                this.setState({
                  img1: require('./pic/persona/Health2.png').default
                })
              }}
              onMouseOut={() => {
                this.setState({
                  img1: require('./pic/persona/Health1.png').default
                })
              }}


              onClick={() => {

                this.setState({
                  health4opacity: 1 - this.state.health4opacity
                })

              }}
            />
            <img src={Health3} alt="Health3"
              style={{ width: "120px", position: 'absolute', top: '65%', left: '5%', zIndex: "102" }}
            />







            <img src={this.state.img2} alt="Age1" className='Age1'
              style={{ width: "180px", position: 'absolute', top: '25%', left: '75%' }}
              onMouseEnter={() => {

                this.setState({
                  img2: require('./pic/persona/Age2.png').default
                })
              }}
              onMouseOut={() => {
                this.setState({
                  img2: require('./pic/persona/Age1.png').default
                })
              }}

              onClick={() => {

                this.setState({
                  age4opacity: 1 - this.state.age4opacity
                })

              }}

            />
            <img src={Age3} alt="Age3"
              style={{ width: "110px", position: 'absolute', top: '37%', left: '83%', zIndex: "102" }}
            />




            <img src={this.state.img4} alt="Gender1" className='Gender1'
              style={{ width: "180px", position: 'absolute', top: '44%', left: '90%' }}
              onMouseEnter={() => {

                this.setState({
                  img4: require('./pic/persona/Gender2.png').default
                })
              }}
              onMouseOut={() => {
                this.setState({
                  img4: require('./pic/persona/Gender1.png').default
                })
              }}
              onClick={() => {

                this.setState({
                  gender4opacity: 1 - this.state.gender4opacity
                })

              }}

            />
            <img src={Gender3} alt="Gender3"
              style={{ width: "120px", position: 'absolute', top: '55%', left: '90%', zIndex: "102" }}
            />



            <img src={this.state.img3} alt="Location1" className='Location1'
              style={{ width: "180px", position: 'absolute', top: '65%', left: '85%' }}

              onMouseEnter={() => {

                this.setState({
                  img3: require('./pic/persona/Location2.png').default
                })
              }}
              onMouseOut={() => {
                this.setState({
                  img3: require('./pic/persona/Location1.png').default
                })
              }}

              onClick={() => {

                this.setState({
                  location4opacity: 1 - this.state.location4opacity
                })

              }}
            />
            <img src={Location3} alt="Location3"
              style={{ width: "120px", position: 'absolute', top: '76%', left: '75%', zIndex: "102" }}
            />



            <img src={Health4} alt="Health4" className='health4'
              style={{ height: "720px", opacity: this.state.health4opacity }}
            />

            <img src={Age4} alt="Age4" className='age4'
              style={{ height: "200px", opacity: this.state.age4opacity }}
            />


            <img src={Gender4} alt="Gender4" className='gender4'
              style={{ height: "100px", opacity: this.state.gender4opacity }}
            />


            <img src={Location4} alt="Location4" className='location4'
              style={{ height: "370px", opacity: this.state.location4opacity }}
            />




          </div>



          <Page2 />

          <div className="Section__item bg-3">
            <Page3 />
          </div>
          <div className="Section__item bg-4">
            <Page4 />

          </div>
          <div className="Section__item bg-5"> <Page5 /></div>
          <div className="Section__item bg-6">

            <Page6 />
          </div>
          <div className="Section__item bg-7">
            <Page7 />

          </div>
          <div className="Section__item bg-8">
            <Page8 />
          </div>

          <div className="Section__item bg-9">
            <Page9 />
          </div>
          <div className="Section__item bg-10">
            <Page10 />
          </div>
          <div className="Section__item bg-11">
            <Page11 />
          </div>
          <div className="Section__item bg-12">
            <Page12 />


          </div>


        </div>
        {/* <ScrollToTop> </ScrollToTop> */}
      </div>
    );
  }
}

export default App;
