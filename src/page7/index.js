import React from "react";
import './page7.css';
import clock from '../pic/page7/Clock.png';
import beforeusingframe from '../pic/page7/BeforeUsingFrame.png';
import afterusing from '../pic/page7/AfterUsing.png';
import clickbefore from '../pic/page7/ClickBefore.png';
import clickafter from '../pic/page7/ClickAfter.png';

import beforeusingimage from '../pic/page7/BeforeUsingImage.png';
import afterusingimage from '../pic/page7/AfterUsingImage.png';

import beforeusingtext from '../pic/page7/BeforeUsingText.png';
import afterusingtext from '../pic/page7/AfterUsingText.png';

import usagedistribution from '../pic/page7/UsageDistribution.png';

import genderbuttonbefore from '../pic/page7/GenderButtonBefore.png';
import agebuttonbefore from '../pic/page7/AgeButtonBefore.png';
import locationbuttonbefore from '../pic/page7/LocationButtonBefore.png';
import healthbuttonbefore from '../pic/page7/HealthButtonBefore.png';

import genderdiagram from '../pic/page7/GenderDiagram.png';
import locationdiagram from '../pic/page7/LocationDiagram.png';
import agediagram from '../pic/page7/AgeDiagram.png';
import healthdiagram from '../pic/page7/HealthDiagram.png';





class Page7 extends React.Component {


        render() {




                return (<div>
                        <img src={clock} alt="clock" className='clock' id='clock1' style={{ height: '116px' }}></img>
                        <img src={beforeusingframe} alt="beforeusingframe" className='before beforeusingframe' id='beforeusingframe' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('beforeusingimage').style.display = (document.getElementById('beforeusingimage').style.display !== 'none' ? 'none' : 'block')
                                        document.getElementById('beforeusingtext').style.display = 'block'

                                }}



                        ></img>
                        <img src={afterusing} alt="afterusing" className='after afterusing' id='afterusing' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('afterusingimage').style.display = 'block'
                                        document.getElementById('usagedistribution').style.display = 'block'
                                        document.getElementById('genderbuttonbefore').style.display = 'block'
                                        document.getElementById('agebuttonbefore').style.display = 'block'
                                        document.getElementById('locationbuttonbefore').style.display = 'block'
                                        document.getElementById('healthbuttonbefore').style.display = 'block'
                                        document.getElementById('afterusingtext').style.display = 'block'

                                }}


                        ></img>
                        <img src={clickbefore} alt="clickbefore" className='arrow clickbefore' id='clickbefore' style={{ height: '78px' }}></img>
                        <img src={clickafter} alt="clickafter" className='arrow clickafter' id='clickafter' style={{ height: '78px' }}></img>

                        <img src={beforeusingimage} alt="beforeusingimage" className='before beforeusingimage' id='beforeusingimage' style={{ height: '268px', display: 'none' }}></img>
                        <img src={afterusingimage} alt="afterusingimage" className='after afterusingimage' id='afterusingimage' style={{ height: '268px', display: 'none' }}></img>

                        <img src={beforeusingtext} alt="beforeusingtext" className='beforetext beforeusingtext' id='beforeusingtext' style={{ height: '100px', display: 'none' }}></img>
                        <img src={afterusingtext} alt="afterusingtext" className='aftertext afterusingtext' id='afterusingtext' style={{ height: '150px', display: 'none' }}></img>
                        <img src={usagedistribution} alt="usagedistribution" className='distribution usagedistribution' id='usagedistribution' style={{ width: '532px', display: 'none' }}></img>

                        <img src={genderbuttonbefore} alt="genderbuttonbefore" className='circlebutton genderbuttonbefore' id='genderbuttonbefore' style={{ height: '60px', display: 'none' }}
                                onClick={() => {
                                        document.getElementById('genderdiagram').style.display = (document.getElementById('genderdiagram').style.display !== 'none' ? 'none' : 'block')
                                }}

                        ></img>
                        <img src={agebuttonbefore} alt="agebuttonbefore" className='circlebutton agebuttonbefore' id='agebuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('agediagram').style.display = (document.getElementById('agediagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={locationbuttonbefore} alt="locationbuttonbefore" className='circlebutton locationbuttonbefore' id='locationbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('locationdiagram').style.display = (document.getElementById('locationdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={healthbuttonbefore} alt="healthbuttonbefore" className='circlebutton healthbuttonbefore' id='healthbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('healthdiagram').style.display = (document.getElementById('healthdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>

                        <img src={genderdiagram} alt="genderdiagram" className='lefttopdiagram genderdiagram' id='genderdiagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={locationdiagram} alt="locationdiagram" className='leftbottomdiagram locationdiagram' id='locationdiagram' style={{ width: '180px', display: 'none' }}></img>
                        <img src={agediagram} alt="agediagram" className='righttopdiagram agediagram' id='agediagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={healthdiagram} alt="healthdiagram" className='rightbottomdiagram healthdiagram' id='healthdiagram' style={{ width: '230px', display: 'none' }}></img>



                </div>)


        }







}






export { Page7 }