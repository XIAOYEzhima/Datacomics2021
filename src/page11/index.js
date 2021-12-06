import React from "react";
import './page11.css';
import Agnes from '../pic/page11/Agnes.png';
import UI from '../pic/page11/UI.png';
import whatif from '../pic/page11/WhatIf.png';


class Page11 extends React.Component {


    render() {




        return (<div>


<img src={UI} alt="UI" className='UI' id='UI' style={{ width:'1050px'}}></img>
<img src={whatif} alt="whatif" className='whatif' id='whatif' style={{ width:'1050px'}}></img>
<img src={Agnes} alt="Agnes" className='Agnes' id='Agnes' style={{ height: '750px'}}></img>


        </div>)


        }




    


}






export { Page11 }