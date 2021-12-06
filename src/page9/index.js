import React from "react";
import './page9.css';
import Fclock from '../pic/page9/FBClock.png';
import Fbeforeusingframe from '../pic/page9/FBeforeUsingFrame.png';
import Fafterusing from '../pic/page9/FAfterUsingFrame.png';
import Fclickbefore from '../pic/page9/FClickBefore.png';
import Fclickafter from '../pic/page9/FClickAfter.png';

import Fbeforeusingimage from '../pic/page9/FBeforeUsingImage.png';
import Fafterusingimage from '../pic/page9/FAfterUsingImage.png';


import Fusagedistribution from '../pic/page9/FUsageDistribution.png';

import Fgenderbuttonbefore from '../pic/page9/FGenderBefore .png';
import Fagebuttonbefore from '../pic/page9/FAgeBefore.png';
import Flocationbuttonbefore from '../pic/page9/FLocationBefore.png';
import Fhealthbuttonbefore from '../pic/page9/FHealthBefore.png';

import Fgenderdiagram from '../pic/page9/FGenderDiagram.png';
import Flocationdiagram from '../pic/page9/FLocationDiagram.png';
import Fagediagram from '../pic/page9/FAgeDiagram.png';
import Fhealthdiagram from '../pic/page9/FHealthDiagram.png';





class Page9 extends React.Component {


        render() {




                return (<div>
                        <img src={Fclock} alt="Fclock" className='clock' id='Fclock1' style={{ height: '116px' }}></img>
                        <img src={Fbeforeusingframe} alt="Fbeforeusingframe" className='before Fbeforeusingframe' id='Fbeforeusingframe' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('Fbeforeusingimage').style.display = (document.getElementById('Fbeforeusingimage').style.display !== 'none' ? 'none' : 'block')

                                }}



                        ></img>
                        <img src={Fafterusing} alt="Fafterusing" className='after Fafterusing' id='Fafterusing' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('Fafterusingimage').style.display = 'block'
                                        document.getElementById('Fusagedistribution').style.display = 'block'
                                        document.getElementById('Fgenderbuttonbefore').style.display = 'block'
                                        document.getElementById('Fagebuttonbefore').style.display = 'block'
                                        document.getElementById('Flocationbuttonbefore').style.display = 'block'
                                        document.getElementById('Fhealthbuttonbefore').style.display = 'block'

                                }}


                        ></img>
                        <img src={Fclickbefore} alt="Fclickbefore" className='arrow Fclickbefore' id='Fclickbefore' style={{ height: '78px' }}></img>
                        <img src={Fclickafter} alt="Fclickafter" className='arrow Fclickafter' id='Fclickafter' style={{ height: '78px' }}></img>

                        <img src={Fbeforeusingimage} alt="Fbeforeusingimage" className='before Fbeforeusingimage' id='Fbeforeusingimage' style={{ height: '268px', display: 'none' }}></img>
                        <img src={Fafterusingimage} alt="Fafterusingimage" className='after Fafterusingimage' id='Fafterusingimage' style={{ height: '268px', display: 'none' }}></img>

                        <img src={Fusagedistribution} alt="Fusagedistribution" className='distribution Fusagedistribution' id='Fusagedistribution' style={{ width: '532px', display: 'none' }}></img>

                        <img src={Fgenderbuttonbefore} alt="Fgenderbuttonbefore" className='circlebutton Fgenderbuttonbefore' id='Fgenderbuttonbefore' style={{ height: '60px', display: 'none' }}
                                onClick={() => {
                                        document.getElementById('Fgenderdiagram').style.display = (document.getElementById('Fgenderdiagram').style.display !== 'none' ? 'none' : 'block')
                                }}

                        ></img>
                        <img src={Fagebuttonbefore} alt="Fagebuttonbefore" className='circlebutton Fagebuttonbefore' id='Fagebuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Fagediagram').style.display = (document.getElementById('Fagediagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={Flocationbuttonbefore} alt="Flocationbuttonbefore" className='circlebutton Flocationbuttonbefore' id='Flocationbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Flocationdiagram').style.display = (document.getElementById('Flocationdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={Fhealthbuttonbefore} alt="Fhealthbuttonbefore" className='circlebutton Fhealthbuttonbefore' id='Fhealthbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Fhealthdiagram').style.display = (document.getElementById('Fhealthdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>

                        <img src={Fgenderdiagram} alt="Fgenderdiagram" className='lefttopdiagram Fgenderdiagram' id='Fgenderdiagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Flocationdiagram} alt="Flocationdiagram" className='leftbottomdiagram Flocationdiagram' id='Flocationdiagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Fagediagram} alt="Fagediagram" className='righttopdiagram Fagediagram' id='Fagediagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Fhealthdiagram} alt="Fhealthdiagram" className='rightbottomdiagram Fhealthdiagram' id='Fhealthdiagram' style={{ width: '230px', display: 'none' }}></img>



                </div>)


        }








}






export { Page9 }