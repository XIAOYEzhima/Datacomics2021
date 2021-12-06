import React from "react";
import './page5.css';
import oldWomanAndGirl from '../pic/page5/oldWomanAndGirl.png';
import categoryButtonBefore from '../pic/page5/categoryButtonBefore.png';
import internetButtonBefore from '../pic/page5/internetButtonBefore.png';
import ornament from '../pic/page5/ornament.png';
import clickMe from '../pic/page5/clickMe.png';
import allLinkType from '../pic/page5/allLinkType.png';
import leftWord from '../pic/page5/leftWord.png';
import word from '../pic/page5/word.png';
import arrow2 from '../pic/page5/arrow.png';
import man from '../pic/page5/man.png';
import linkassessed from '../pic/page5/linkAssessed.png'; 
import maleusage from '../pic/page5/maleUsage.png';
import femaleusage from '../pic/page5/femaleUsage.png';
import overall from '../pic/page5/overAll.png';
import clickthebutton from '../pic/page5/clickTheButton.png';
import usagebymale from '../pic/page5/usageByMale.png';
import usagebyfemale from '../pic/page5/usageByFemale.png';
import usagebygender from '../pic/page5/usageByGender.png';
import compare from '../pic/page5/compare.png';
import malebuttonbefore from '../pic/page5/MaleButtonBefore.png';
import femalebuttonbefore from '../pic/page5/FemaleButtonBefore.png';
import overallbuttonbefore from '../pic/page5/OverallButtonBefore.png';
import comparebutton from '../pic/page5/CompareButton.png';
import internetdiagram from '../pic/page5/Diagram.png';
import p5malediagram from '../pic/page5/MaleDiagram.png';
import p5femalediagram from '../pic/page5/FemaleDiagram.png';
import comparediagram from '../pic/page5/CompareDiagram.png';









class Page5 extends React.Component {

    render() {

        return (
            <div className='page5'>
                <div className='background'>
                    <img src={oldWomanAndGirl} alt="oldWomanAndGirl" className='oldWomanAndGirl' id='oldWomanAndGirl' style={{ height: '740px', display: 'block' }}></img>
                    <img src={ornament} alt="ornament" className='ornament' style={{ height: '200px' }}></img>
                    <img src={leftWord} alt="leftWord" className='leftWord' style={{ height: '700px' }}></img>
                    <img src={arrow2} alt="arrow2" className='arrow arrow2' style={{ height: '50px' }}></img>


                </div>
                <img src={categoryButtonBefore} alt="categoryButtonBefore" className='categoryButtonBefore' style={{ height: '150px' }}

                    onClick={() => {
                        document.getElementById('man').style.display = 'block'
                        document.getElementById('linkassessed').style.display = 'block'
                        document.getElementById('p5maleusage').style.display = (document.getElementById('p5maleusage').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('p5femaleusage').style.display = (document.getElementById('p5femaleusage').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('p5overall').style.display = (document.getElementById('p5overall').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('p5clickthebutton').style.display = 'block'
                        document.getElementById('oldWomanAndGirl').style.display = 'none'
                        document.getElementById('p5word').style.display = 'none'
                        document.getElementById('compare').style.display = (document.getElementById('compare').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('p5malediagram').style.display = 'none'
                        document.getElementById('p5femalediagram').style.display = 'none'
                        document.getElementById('comparediagram').style.display = 'none'
                        document.getElementById('malebuttonbefore').style.display = 'none'
                        document.getElementById('femalebuttonbefore').style.display = 'none'
                        document.getElementById('overallbuttonbefore').style.display = 'none'
                        document.getElementById('comparebutton').style.display = 'none'
                        document.getElementById('internetdiagram').style.display = 'none'


                    }}

                ></img>
                <img src={internetButtonBefore} alt="internetButtonBefore" className='internetButtonBefore' style={{ height: '150px' }}

                    onClick={() => {
                        document.getElementById('man').style.display = 'block'
                        document.getElementById('linkassessed').style.display = 'none'
                        document.getElementById('p5maleusage').style.display = 'none'
                        document.getElementById('p5femaleusage').style.display = 'none'
                        document.getElementById('p5overall').style.display = 'none'
                        document.getElementById('p5clickthebutton').style.display = 'block'
                        document.getElementById('oldWomanAndGirl').style.display = 'none'
                        document.getElementById('p5word').style.display = 'none'
                        document.getElementById('compare').style.display = 'none'
                        document.getElementById('usagebymale').style.display = 'none'
                        document.getElementById('usagebyfemale').style.display = 'none'
                        document.getElementById('usagebygender').style.display = 'none'
                        document.getElementById('malebuttonbefore').style.display = (document.getElementById('malebuttonbefore').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('femalebuttonbefore').style.display = (document.getElementById('femalebuttonbefore').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('overallbuttonbefore').style.display = (document.getElementById('overallbuttonbefore').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('comparebutton').style.display = (document.getElementById('comparebutton').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('internetdiagram').style.display = (document.getElementById('internetdiagram').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('p5malediagram').style.display = 'none'
                        document.getElementById('p5femalediagram').style.display = 'none'
                        document.getElementById('comparediagram').style.display = 'none'



                    }}

                ></img>
                <img src={clickMe} alt="clickMe" className='clikemetoseemore clickMe' style={{ height: '70px' }}></img>
                <img src={allLinkType} alt="allLinkType" className='allLinkType' style={{ height: '250px' }}></img>
                <img src={word} alt="word" className='word' id='p5word' style={{ height: '200px', display: 'block' }}></img>
                <img src={man} alt="man" className='man' id='man' style={{ height: '730px', display: 'none' }}></img>
                <img src={linkassessed} alt="linkassessed" className='linkassessed' id='linkassessed' style={{ height: '230px', display: 'none' }}></img>
                <img src={maleusage} alt="maleusage" className='circlebutton maleusage' id='p5maleusage' style={{ height: '60px', display: 'none' }}
                    onClick={() => {
                        document.getElementById('usagebymale').style.display = (document.getElementById('usagebymale').style.display !== 'none' ? 'none' : 'block')
                    }}

                ></img>
                <img src={femaleusage} alt="femaleusage" className='circlebutton femaleusage' id='p5femaleusage' style={{ height: '60px', display: 'none' }}
                    onClick={() => {
                        document.getElementById('usagebyfemale').style.display = (document.getElementById('usagebyfemale').style.display !== 'none' ? 'none' : 'block')
                    }}

                ></img>
                <img src={overall} alt="overall" className='circlebutton overall' id='p5overall' style={{ height: '60px', display: 'none' }}
                    onClick={() => {
                        let isAllDisplay = true;

                        Array.from(document.getElementsByClassName('diagramusage')).forEach(element => {
                            isAllDisplay = isAllDisplay ? element.style.display === 'block' : false;
                        })


                        Array.from(document.getElementsByClassName('diagramusage')).forEach(element => {
                            element.style.display = isAllDisplay ? 'none' : 'block'
                        })
                    }}

                ></img>
                <img src={clickthebutton} alt="clickthebutton" className='bulb clickthebutton' id='p5clickthebutton' style={{ height: '100px', display: 'none' }}></img>
                <img src={compare} alt="compare" className='circlebutton compare ' id='compare' style={{ height: '60px', display: 'none' }}

                    onClick={() => {
                        document.getElementById('usagebygender').style.display = (document.getElementById('usagebygender').style.display !== 'none' ? 'none' : 'block')
                    }}

                ></img>


                <img src={usagebymale} alt="usagebymale" className='diagramusage usagebymale' id='usagebymale' style={{ height: '230px', display: 'none' }}></img>
                <img src={usagebyfemale} alt="usagebyfemale" className='diagramusage usagebyfemale' id='usagebyfemale' style={{ height: '230px', display: 'none' }}></img>
                <img src={usagebygender} alt="usagebygender" className='diagram usagebygender' id='usagebygender' style={{ height: '235px', display: 'none' }}></img>


                <img src={malebuttonbefore} alt="malebuttonbefore" className='circlebutton malebuttonbefore' id='malebuttonbefore' style={{ height: '70px', display: 'none' }}
                    onClick={() => {
                        document.getElementById('p5malediagram').style.display = (document.getElementById('p5malediagram').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('comparediagram').style.display = 'none'

                    }}


                ></img>
                <img src={femalebuttonbefore} alt="femalebuttonbefore" className='circlebutton femalebuttonbefore' id='femalebuttonbefore' style={{ height: '70px', display: 'none' }}
                    onClick={() => {
                        document.getElementById('p5femalediagram').style.display = (document.getElementById('p5femalediagram').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('comparediagram').style.display = 'none'

                    }}

                ></img>
                <img src={overallbuttonbefore} alt="overallbuttonbefore" className='circlebutton overallbuttonbefore' id='overallbuttonbefore' style={{ height: '70px', display: 'none' }}
                    onClick={() => {
                        let isAllDisplay = true;

                        Array.from(document.getElementsByClassName('diagramusage1')).forEach(element => {
                            isAllDisplay = isAllDisplay ? element.style.display === 'block' : false;
                        })


                        Array.from(document.getElementsByClassName('diagramusage1')).forEach(element => {
                            element.style.display = isAllDisplay ? 'none' : 'block'
                        })

                        document.getElementById('comparediagram').style.display = 'none'

                    }}

                ></img>
                <img src={comparebutton} alt="comparebutton" className='circlebutton comparebutton' id='comparebutton' style={{ height: '70px', display: 'none' }}

                    onClick={() => {
                        document.getElementById('comparediagram').style.display = (document.getElementById('comparediagram').style.display !== 'none' ? 'none' : 'block')
                        document.getElementById('p5malediagram').style.display='none'
                        document.getElementById('p5femalediagram').style.display='none'

                    }}


                ></img>


                <img src={internetdiagram} alt="internetdiagram" className='internetdiagram' id='internetdiagram' style={{ height: '235px', display: 'none' }} ></img>
                <img src={p5malediagram} alt="p5malediagram" className='diagramusage1 p5malediagram' id='p5malediagram' style={{ height: '230px', display: 'none' }}></img>
                <img src={p5femalediagram} alt="p5femalediagram" className='diagramusage1 p5femalediagram' id='p5femalediagram' style={{ height: '230px', display: 'none' }}></img>
                <img src={comparediagram} alt="comparediagram" className='diagram comparediagram' id='comparediagram' style={{ height: '212px', display: 'none' }}></img>



            </div>






        )



    }
}






export { Page5 }