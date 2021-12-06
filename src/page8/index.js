import React from "react";
import './page8.css';
import Yclock from '../pic/page8/YoutubeClock.png';
import Ybeforeusingframe from '../pic/page8/YBeforeUsingFrame.png';
import Yafterusing from '../pic/page8/YAfterUsingFrame.png';
import Yclickbefore from '../pic/page8/YClickBefore.png';
import Yclickafter from '../pic/page8/YClickAfter.png';

import Ybeforeusingimage from '../pic/page8/YBeforeUsingImage.png';
import Yafterusingimage from '../pic/page8/YAfterUsingImage.png';

import Ybeforeusingtext from '../pic/page8/YBeforeUsingText.png';
import Yafterusingtext from '../pic/page8/YAfterUsingText.png';

import Yusagedistribution from '../pic/page8/YUsageDistribution.png';

import Ygenderbuttonbefore from '../pic/page8/YGenderBefore.png';
import Yagebuttonbefore from '../pic/page8/YAgeBefore.png';
import Ylocationbuttonbefore from '../pic/page8/YLocationBefore.png';
import Yhealthbuttonbefore from '../pic/page8/YHealthBefore.png';

import Ygenderdiagram from '../pic/page8/YGenderDiagram.png';
import Ylocationdiagram from '../pic/page8/YLocationDiagram.png';
import Yagediagram from '../pic/page8/YAgeDiagram.png';
import Yhealthdiagram from '../pic/page8/YHealthDiagram.png';





class Page8 extends React.Component {


        render() {




                return (<div>
                        <img src={Yclock} alt="Yclock" className='clock' id='Yclock1' style={{ height: '116px' }}></img>
                        <img src={Ybeforeusingframe} alt="Ybeforeusingframe" className='before Ybeforeusingframe' id='Ybeforeusingframe' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('Ybeforeusingimage').style.display = (document.getElementById('Ybeforeusingimage').style.display !== 'none' ? 'none' : 'block')
                                        document.getElementById('Ybeforeusingtext').style.display = 'block'

                                }}



                        ></img>
                        <img src={Yafterusing} alt="Yafterusing" className='after Yafterusing' id='Yafterusing' style={{ height: '268px' }}
                                onClick={() => {
                                        document.getElementById('Yafterusingimage').style.display = 'block'
                                        document.getElementById('Yusagedistribution').style.display = 'block'
                                        document.getElementById('Ygenderbuttonbefore').style.display = 'block'
                                        document.getElementById('Yagebuttonbefore').style.display = 'block'
                                        document.getElementById('Ylocationbuttonbefore').style.display = 'block'
                                        document.getElementById('Yhealthbuttonbefore').style.display = 'block'
                                        document.getElementById('Yafterusingtext').style.display = 'block'

                                }}


                        ></img>
                        <img src={Yclickbefore} alt="Yclickbefore" className='arrow Yclickbefore' id='Yclickbefore' style={{ height: '78px' }}></img>
                        <img src={Yclickafter} alt="Yclickafter" className='arrow Yclickafter' id='Yclickafter' style={{ height: '78px' }}></img>

                        <img src={Ybeforeusingimage} alt="Ybeforeusingimage" className='before Ybeforeusingimage' id='Ybeforeusingimage' style={{ height: '268px', display: 'none' }}></img>
                        <img src={Yafterusingimage} alt="Yafterusingimage" className='after Yafterusingimage' id='Yafterusingimage' style={{ height: '268px', display: 'none' }}></img>

                        <img src={Ybeforeusingtext} alt="Ybeforeusingtext" className='beforetext Ybeforeusingtext' id='Ybeforeusingtext' style={{ height: '130px', display: 'none' }}></img>
                        <img src={Yafterusingtext} alt="Yafterusingtext" className='aftertext Yafterusingtext' id='Yafterusingtext' style={{ height: '100px', display: 'none' }}></img>
                        <img src={Yusagedistribution} alt="Yusagedistribution" className='distribution Yusagedistribution' id='Yusagedistribution' style={{ width: '532px', display: 'none' }}></img>

                        <img src={Ygenderbuttonbefore} alt="Ygenderbuttonbefore" className='circlebutton Ygenderbuttonbefore' id='Ygenderbuttonbefore' style={{ height: '60px', display: 'none' }}
                                onClick={() => {
                                        document.getElementById('Ygenderdiagram').style.display = (document.getElementById('Ygenderdiagram').style.display !== 'none' ? 'none' : 'block')
                                }}

                        ></img>
                        <img src={Yagebuttonbefore} alt="Yagebuttonbefore" className='circlebutton Yagebuttonbefore' id='Yagebuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Yagediagram').style.display = (document.getElementById('Yagediagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={Ylocationbuttonbefore} alt="Ylocationbuttonbefore" className='circlebutton Ylocationbuttonbefore' id='Ylocationbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Ylocationdiagram').style.display = (document.getElementById('Ylocationdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>
                        <img src={Yhealthbuttonbefore} alt="Yhealthbuttonbefore" className='circlebutton Yhealthbuttonbefore' id='Yhealthbuttonbefore' style={{ height: '60px', display: 'none' }}
                                                        onClick={() => {
                                                                document.getElementById('Yhealthdiagram').style.display = (document.getElementById('Yhealthdiagram').style.display !== 'none' ? 'none' : 'block')
                                                        }}
                        
                        ></img>

                        <img src={Ygenderdiagram} alt="Ygenderdiagram" className='lefttopdiagram Ygenderdiagram' id='Ygenderdiagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Ylocationdiagram} alt="Ylocationdiagram" className='leftbottomdiagram Ylocationdiagram' id='Ylocationdiagram' style={{ width: '180px', display: 'none' }}></img>
                        <img src={Yagediagram} alt="Yagediagram" className='righttopdiagram Yagediagram' id='Yagediagram' style={{ width: '200px', display: 'none' }}></img>
                        <img src={Yhealthdiagram} alt="Yhealthdiagram" className='rightbottomdiagram Yhealthdiagram' id='Yhealthdiagram' style={{ width: '230px', display: 'none' }}></img>



                </div>)


        }








}






export { Page8 }