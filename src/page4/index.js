import React from "react";
import './page4.css';
import people from '../pic/page4/People.png';
import overalldiagram from '../pic/page4/OverallDiagram.png';
import clickbuttons from '../pic/page4/ClickButtons.png';
import overalltext from '../pic/page4/OverAllText.png';

import comparisontext from '../pic/page4/ComparisonText.png';
import maletext from '../pic/page4/MaleText.png';
import femaletext from '../pic/page4/FemaleText.png';
import buttonoverallbefore from '../pic/page4/ButtonOverallBefore.png';
// import buttonoverallafter from '../pic/page4/ButtonOverallAfter.png';
import button2021before from '../pic/page4/Button2021Before.png';
// import button2021after from '../pic/page4/Button2021After.png';
import button2020before from '../pic/page4/Button2020Before.png';
import button2019before from '../pic/page4/Button2019Before.png';
import button2018before from '../pic/page4/Button2018Before.png';
import malebuttonbefore from '../pic/page4/MaleButtonBefore.png';
import femalebuttonbefore from '../pic/page4/FemaleButtonBefore.png';
import comparisionbuttonbefore from '../pic/page4/ComparisonButtonBefore.png';
import line2021 from '../pic/page4/Line2021.png';
import line2020 from '../pic/page4/Line2020.png';
import line2019 from '../pic/page4/Line2019.png';
import line2018 from '../pic/page4/Line2018.png';
import malediagram from '../pic/page4/MaleDiagram.png';
import femalediagram from '../pic/page4/FemaleDiagram.png';
import comparisondiagram from '../pic/page4/ComparisonDiagram.png';
import whiteboard from '../pic/page4/WhiteBoard.png';






class Page4 extends React.Component {


    render() {



        return (
            <div className='page5'>
                <img src={whiteboard} alt="whiteboard" className='background whiteboard' style={{ height: '735px' }}></img>

                <img src={people} alt="people" className='frame people' style={{ height: '735px' }}></img>
                <img src={overalldiagram} alt="overalldiagram" className='background overalldiagram' style={{ width: '500px' }}></img>
                <img src={clickbuttons} alt="clickbuttons" className='bulb clickbuttons' style={{ height: '100px' }}></img>
                <img src={overalltext} alt="overalltext" className='text overalltext' style={{ height: '220px' }}></img>

                <img src={comparisontext} alt="comparisontext" className='text comparisontext' id= 'comparisontext' style={{ height: '210px', display:'none' }}></img>
                <img src={maletext} alt="maletext" className='text maletext' id= 'maletext' style={{ height: '130px', display:'none' }}></img>
                <img src={femaletext} alt="femaletext" className='text femaletext' id= 'femaletext' style={{ height: '130px', display:'none'}}></img>

                <img src={buttonoverallbefore} alt="buttonoverallbefore" className='squarebutton buttonoverallbefore' style={{ height: '35px' }}


                    onClick={() => {
                        let isAllDisplay = true;

                        Array.from(document.getElementsByClassName('line')).forEach(element => {
                            isAllDisplay = isAllDisplay ? element.style.display === 'block' : false;
                        })


                        Array.from(document.getElementsByClassName('line')).forEach(element => {
                            element.style.display = isAllDisplay ? 'none' : 'block'
                        })
                    }}
                ></img>
                <img src={button2021before} alt="button2021before" className='squarebutton button2021before' style={{ height: '35px' }}
                    onClick={() => {
                        document.getElementById('line2021').style.display = (document.getElementById('line2021').style.display !== 'none' ? 'none' : 'block')
                    }}

                ></img>
                <img src={button2020before} alt="button2020before" className='squarebutton button2020before' style={{ height: '35px' }}

                    onClick={() => {
                        document.getElementById('line2020').style.display = (document.getElementById('line2020').style.display !== 'none' ? 'none' : 'block')
                    }}

                ></img>
                <img src={button2019before} alt="button2019before" className='squarebutton button2019before' style={{ height: '35px' }}
                    onClick={() => {
                        document.getElementById('line2019').style.display = (document.getElementById('line2019').style.display !== 'none' ? 'none' : 'block')
                    }}

                />
                <img src={button2018before} alt="button2018before" className='squarebutton button2018before' style={{ height: '35px', cursor: "pointer" }}

                    onClick={() => {
                        document.getElementById('line2018').style.display = (document.getElementById('line2018').style.display !== 'none' ? 'none' : 'block')
                    }}


                />

                <img src={malebuttonbefore} alt="malebuttonbefore" className='circlebutton malebuttonbefore' style={{ height: '60px' }}
                    onClick={() => {
                        document.getElementById('malediagram').style.display = (document.getElementById('malediagram').style.display !== 'none' ? 'none' : 'block');
                        document.getElementById('femalediagram').style.display = 'none';
                        document.getElementById('comparisondiagram').style.display = 'none';
                        document.getElementById('maletext').style.display = (document.getElementById('maletext').style.display !== 'none' ? 'none' : 'block');
                        document.getElementById('femaletext').style.display = 'none';
                        document.getElementById('comparisontext').style.display = 'none';

                    }}

                ></img>
                <img src={femalebuttonbefore} alt="femalebuttonbefore" className='circlebutton femalebuttonbefore' style={{ height: '60px' }}
                    onClick={() => {
                        document.getElementById('femalediagram').style.display = (document.getElementById('femalediagram').style.display !== 'none' ? 'none' : 'block');
                        document.getElementById('malediagram').style.display = 'none';
                        document.getElementById('comparisondiagram').style.display = 'none';
                        document.getElementById('maletext').style.display = 'none';
                        document.getElementById('femaletext').style.display = (document.getElementById('femaletext').style.display !== 'none' ? 'none' : 'block');
                        document.getElementById('comparisontext').style.display = 'none';
                    }}


                ></img>
                <img src={comparisionbuttonbefore} alt="comparisionbuttonbefore" className='circlebutton comparisionbuttonbefore' style={{ height: '60px' }}
                    onClick={() => {
                        document.getElementById('comparisondiagram').style.display = (document.getElementById('comparisondiagram').style.display !== 'none' ? 'none' : 'block');
                        document.getElementById('malediagram').style.display = 'none';
                        document.getElementById('femalediagram').style.display = 'none';
                        document.getElementById('maletext').style.display = 'none';
                        document.getElementById('femaletext').style.display = 'none';
                        document.getElementById('comparisontext').style.display = (document.getElementById('comparisontext').style.display !== 'none' ? 'none' : 'block');
                    }}
                ></img>

                <img src={line2021} alt="line2021" className='line line2021' id='line2021' style={{ width: '310px', display: "none" }}></img>
                <img src={line2020} alt="line2020" className='line line2020' id='line2020' style={{ width: '341px', display: "none" }}></img>
                <img src={line2019} alt="line2019" className='line line2019' id='line2019' style={{ width: '341px', display: "none" }}></img>
                <img src={line2018} alt="line2018" className='line line2018' id='line2018' style={{ width: '341px', display: "none" }} />

                <img src={malediagram} alt="malediagram" className='diagram malediagram' id='malediagram' style={{ width: '450px', display: "none" }}></img>
                <img src={femalediagram} alt="femalediagram" className='diagram femalediagram' id='femalediagram' style={{ width: '450px', display: "none" }}></img>
                <img src={comparisondiagram} alt="comparisondiagram" className='diagram comparisondiagram' id='comparisondiagram' style={{ width: '450px', display: "none" }}></img>




            </div>






        )



    }
}






export { Page4 }