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
import arrow from '../pic/page5/arrow.png';
import man from '../pic/page5/man.png';
import linkassessed from '../pic/page5/linkAssessed.png';
import maleusage from '../pic/page5/maleUsage.png';
import femaleusage from '../pic/page5/femaleUsage.png';






class Page5 extends React.Component {

    render() {

        return (
            <div className='page5'>
                <div className='background'>
                    <img src={oldWomanAndGirl} alt="oldWomanAndGirl" className='oldWomanAndGirl' style={{ height: '740px' }}></img>
                    <img src={ornament} alt="ornament" className='ornament' style={{ height: '200px' }}></img>
                    <img src={leftWord} alt="leftWord" className='leftWord' style={{ height: '700px' }}></img>
                    <img src={arrow} alt="arrow2" className='arrow' style={{ height: '50px' }}></img>


                </div>
                <img src={categoryButtonBefore} alt="categoryButtonBefore" className='categoryButtonBefore' style={{ height: '150px' }}></img>
                <img src={internetButtonBefore} alt="internetButtonBefore" className='internetButtonBefore' style={{ height: '150px' }}></img>
                <img src={clickMe} alt="clickMe" className='clickMe' style={{ height: '70px' }}></img>
                <img src={allLinkType} alt="allLinkType" className='allLinkType' style={{ height: '250px' }}></img>
                <img src={word} alt="word" className='word' style={{ height: '200px' }}></img>
                <img src={man} alt="man" className='man' style={{ height: '730px' }}></img>
                <img src={linkassessed} alt="linkassessed" className='linkassessed' style={{ height: '300px' }}></img>
                <img src={maleusage} alt="maleusage" className='maleusage' style={{ height: '60px' }}></img>
                <img src={femaleusage} alt="femaleusage" className='femaleusage' style={{ height: '60px' }}></img>



            </div>






        )



    }
}






export { Page5 }