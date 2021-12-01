import React from "react";
import './page3.css';
import p1 from '../pic/page3/p1.png';
import p2 from '../pic/page3/p2.png';
import p3 from '../pic/page3/p3.png';

import word1 from '../pic/page3/word1.png';
import word2 from '../pic/page3/word2.png';
import word3 from '../pic/page3/word3.png';
import word4 from '../pic/page3/word4.png';
import word5 from '../pic/page3/word5.png';

import p4 from '../pic/page3/p4.png';


class Page3 extends React.Component {


    render() {




        return (
            <div className='page3'>
                <img src={p1} alt="p1" className='p1'style={{ height: '300px' }}></img>
                <img src={p2} alt="p2" className='p2' style={{ height: '430px' }}></img>
                <img src={p3} alt="p3" className='p3'style={{ height: '400px' }}></img>

                <img src={word1} alt="word1" className='word1'style={{ height: '200px' }}></img>
                <img src={word2} alt="word2" className='word2'style={{ height: '70px' }}></img>
                <img src={word3} alt="word3" className='word3'style={{ height: '280px' }}></img>
                <img src={word4} alt="word4" className='word4'style={{ height: '180px' }}></img>
                <img src={word5} alt="word5" className='word5'style={{ height: '320px' }}></img>

                <img src={p4} alt="p4" className='p4'style={{ height: '230px' }}></img>




            </div>






        )



    }
}









export { Page3 }