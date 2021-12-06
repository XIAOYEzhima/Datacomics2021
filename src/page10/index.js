import React from "react";
import './page10.css';
import Cclock from '../pic/page10/CClock.png';
import Cbeforeusingframe from '../pic/page10/CBeforeUsingFrame.png';
import Cafterusing from '../pic/page10/CAfterUsingFrame.png';
import Cclickbefore from '../pic/page10/CClickBefore.png';
import Cclickafter from '../pic/page10/CClickAfter.png';

import Cbeforeusingimage from '../pic/page10/CBeforeUsingImage.png';
import Cafterusingimage from '../pic/page10/CAfterUsingImage.png';

import Cbeforeusingtext from '../pic/page10/CBeforeUsingText.png';
import Cafterusingtext from '../pic/page10/CAfterUsingText.png';

import Cusagedistribution from '../pic/page10/CUsageDistribution.png';

import Cgenderbuttonbefore from '../pic/page10/CGenderBefore.png';
import Cagebuttonbefore from '../pic/page10/CAgeBefore.png';
import Clocationbuttonbefore from '../pic/page10/CLocationBefore.png';
import Chealthbuttonbefore from '../pic/page10/CHealthBefore.png';

import Cgenderdiagram from '../pic/page10/CGenderDiagram.png';
import Clocationdiagram from '../pic/page10/CLocationDiagram.png';
import Cagediagram from '../pic/page10/CAgeDiagram.png';
import Chealthdiagram from '../pic/page10/CHealthDiagram.png';





class Page10 extends React.Component {


        render() {




                return (<div>
                        <img src={Cclock} alt="Cclock" className='clock' id='Cclock1' style={{ height: '116px' }}></img>
                        <img src={Cbeforeusingframe} alt="Cbeforeusingframe" className='before Cbeforeusingframe' id='Cbeforeusingframe' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('Cbeforeusingimage').style.display = (document.getElementById('Cbeforeusingimage').style.display !== 'none' ? 'none' : 'block')
                                        document.getElementById('Cbeforeusingtext').style.display = 'block'

                                }}



                        ></img>
                        <img src={Cafterusing} alt="Cafterusing" className='after Cafterusing' id='Cafterusing' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('Cafterusingimage').style.display = 'block'
                                        document.getElementById('Cusagedistribution').style.display = 'block'
                                        document.getElementById('Cgenderbuttonbefore').style.display = 'block'
                                        document.getElementById('Cagebuttonbefore').style.display = 'block'
                                        document.getElementById('Clocationbuttonbefore').style.display = 'block'
                                        document.getElementById('Chealthbuttonbefore').style.display = 'block'
                                        document.getElementById('Cafterusingtext').style.display = 'block'

                                }}


                        ></img>
                        <img src={Cclickbefore} alt="Cclickbefore" className='arrow Cclickbefore' id='Cclickbefore' style={{ height: '78px' }}></img>
                        <img src={Cclickafter} alt="Cclickafter" className='arrow Cclickafter' id='Cclickafter' style={{ height: '78px' }}></img>

                        <img src={Cbeforeusingimage} alt="Cbeforeusingimage" className='before Cbeforeusingimage' id='Cbeforeusingimage' style={{ height: '268px', display: 'none' }}></img>
                        <img src={Cafterusingimage} alt="Cafterusingimage" className='after Cafterusingimage' id='Cafterusingimage' style={{ height: '268px', display: 'none' }}></img>

                        <img src={Cbeforeusingtext} alt="Cbeforeusingtext" className='beforetext Cbeforeusingtext' id='Cbeforeusingtext' style={{ height: '130px', display: 'none' }}></img>
                        <img src={Cafterusingtext} alt="Cafterusingtext" className='aftertext Cafterusingtext' id='Cafterusingtext' style={{ height: '80px', display: 'none' }}></img>
                        <img src={Cusagedistribution} alt="Cusagedistribution" className='distribution Cusagedistribution' id='Cusagedistribution' style={{ width: '532px', display: 'none' }}></img>

                        <img src={Cgenderbuttonbefore} alt="Cgenderbuttonbefore" className='circlebutton Cgenderbuttonbefore' id='Cgenderbuttonbefore' style={{ height: '60px', display: 'none' }}
                                onClick={() => {
                                        document.getElementById('Cgenderdiagram').style.display = (document.getElementById('Cgenderdiagram').style.display !== 'none' ? 'none' : 'block')
                                }}

                        ></img>
                        <img src={Cagebuttonbefore} alt="Cagebuttonbefore" className='circlebutton Cagebuttonbefore' id='Cagebuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Cagediagram').style.display = (document.getElementById('Cagediagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={Clocationbuttonbefore} alt="Clocationbuttonbefore" className='circlebutton Clocationbuttonbefore' id='Clocationbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Clocationdiagram').style.display = (document.getElementById('Clocationdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={Chealthbuttonbefore} alt="Chealthbuttonbefore" className='circlebutton Chealthbuttonbefore' id='Chealthbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Chealthdiagram').style.display = (document.getElementById('Chealthdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>

                        <img src={Cgenderdiagram} alt="Cgenderdiagram" className='lefttopdiagram Cgenderdiagram' id='Cgenderdiagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Clocationdiagram} alt="Clocationdiagram" className='leftbottomdiagram Clocationdiagram' id='Clocationdiagram' style={{ width: '180px', display: 'none' }}></img>
                        <img src={Cagediagram} alt="Cagediagram" className='righttopdiagram Cagediagram' id='Cagediagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Chealthdiagram} alt="Chealthdiagram" className='rightbottomdiagram Chealthdiagram' id='Chealthdiagram' style={{ width: '210px', display: 'none' }}></img>



                </div>)


        }








}






export { Page10 }