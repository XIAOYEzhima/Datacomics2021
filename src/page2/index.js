import React from 'react';
import './page2.css';
import frontdoor from '../pic/page2/frontdoor.png';
import clickme from '../pic/page2/clickme.png';
import arrow from '../pic/page2/arrow.png';
import arrowwhite from '../pic/page2/arrowwhite.png';

import purpletext from '../pic/page2/purpletext.png';
import openwindow from '../pic/page2/openwindow.png';
import welcome from '../pic/page2/welcome.png';




class Page2 extends React.Component {


    state = {

        purpletextopacity: 0,
        openwindowopacity: 0,
        visible: false,
        isScrolling: false,

    };

    componentDidMount() {
        document.getElementById("section").addEventListener("scroll", this.isOnScreen);

    }

    isOnScreen = () => {
        const rect = this.p2section?.getBoundingClientRect();
        if (rect.y === 0) {
            document.getElementById("section").addEventListener("wheel", this.onScroll);
        }
    }

    onScroll = (e) => {
        if (this.state.isScrolling === true) {
            this.setState({ isScrolling: false });
            document.getElementById("section").removeEventListener("wheel", this.onScroll);
            // document.getElementById("section").removeEventListener("scroll", this.isOnScreen);
        } else {
            e.preventDefault();
            this.setState({ isScrolling: true });
        }
        
        
    };

    render() {
        return (

            <div className="Section__item bg-2" ref={(p2section) => this.p2section = p2section}>
                <div className='p2container' >
                    <img src={frontdoor} alt="Frontdoor" className='frontdoor'
                        style={{ height: "745px" }}
                    />

                    {/* 點擊前閃爍 */}


                    {/* 點擊后消失 */}

                    <img src={clickme} alt="Clickme" className='clickme'
                        style={{ height: "125px" }}
                        onClick={() => {

                            this.setState({

                            })
                        }}

                    />



                    {/* 點擊后出現 */}

                    <img src={purpletext} alt="Purpletext" className='purpletext'
                        style={{ height: "477px", opacity: this.state.purpletextopacity }}
                    />

                    {/* 點擊後出現 */}

                    <img src={openwindow} alt="Openwindow" className='openwindow'
                        style={{ height: "745px", opacity: this.state.openwindowopacity, zIndex: '100' }}
                        onClick={() => {

                            this.setState({
                                purpletextopacity: this.state.purpletextopacity === 0 ? 1 : 0,
                                openwindowopacity: this.state.openwindowopacity === 0 ? 1 : 0,
                                visible: !this.state.visible
                            })

                            console.log(2)
                            console.log(this.state)

                        }}

                    />

                    {/* 點擊后消失 */}

                    <img src={arrow} alt="Arrow" className='arrow'
                        style={{
                            height: "78px",
                            display: this.state.visible ? 'none' : 'block',
                            zIndex: '102'
                        }}

                    />
                    <img src={arrowwhite} alt="Arrowwhite" className='arrowwhite'
                        style={{
                            height: "78px",
                            display: this.state.visible ? 'block' : 'none',
                            zIndex: '101'
                        }}

                    />



                    {/* 滾動后出現 */}

                    <img src={welcome} alt="Welcome" className='welcome'
                        style={{
                            height: "130px",
                            visibility: this.state.isScrolling ? "visible" : "hidden"
                        }}

                    />

                </div>
            </div>)
    }
}

export { Page2 }