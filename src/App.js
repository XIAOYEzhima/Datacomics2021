import './App.css';
import React from 'react';
import { Player } from './player';
import DiTu from './pic/persona/DiTu.png';
import Health1 from './pic/persona/Health1.png';
import Location1 from './pic/persona/Location1.png';
import Gender1 from './pic/persona/Gender1.png';
import Age1 from './pic/persona/Age1.png';

import ScrollToTop from './back to top icon/ScrollToTop';


class App extends React.Component {
  
  constructor(props){
    super(props),
      this.state={


      }
  }
  
  render() {
    return (
      <div className="App">

        <Player />
        <div className="Section">
          <div className="Section__item bg-1">
            
            <img src={DiTu} alt="pic1" style={{height:"760px",justifyContent:'center',alignItems:'center'}}/>
            <img src={Health1} alt="pic2"
             style={{width:"180px",position:'absolute',top: '51%',left: '-10%'}} 
             onMouseOn={e => (e.currentTarget.src={Age1})}
             onMouseOver={e => (e.currentTarget.src={Health1})}
            />
            <img src={Age1} alt="pic3" style={{width:"180px",position:'absolute',top: '25%',left: '70%'}}/>
            <img src={Location1} alt="pic4" style={{width:"180px",position:'absolute',top: '45%',left: '85%'}}/>
            <img src={Gender1} alt="pic4" style={{width:"180px",position:'absolute',top: '70%',left: '75%'}}/>

          </div>
          <div className="Section__item bg-2">Item 2</div>
          <div className="Section__item bg-3">Item 3</div>
          <div className="Section__item bg-4">Item 4</div>
          <div className="Section__item bg-5">Item 5</div>
          <div className="Section__item bg-5">Item 6</div>
          <div className="Section__item bg-5">Item 7</div>
          <div className="Section__item bg-5">Item 8</div>
        </div>
       <ScrollToTop> </ScrollToTop>
       </div>
    );
  }
}

export default App;
