import React from "react";
import './page6.css';
import agreement from '../pic/page6/Agreement.png';
import agreementtext from '../pic/page6/AgreementText.png';
import livein from '../pic/page6/Livein.png';
import satisfaction from '../pic/page6/Satisfaction.png';
import satisfactiontext from '../pic/page6/SatisfactionText.png';


class Page6 extends React.Component {


    render() {




        return (<div>

<img src={agreement} alt="agreement" className='agreement' id='agreement' style={{ height: '310px'}}></img>
<img src={livein} alt="livein" className='livein' id='livein' style={{ height: '450px'}}></img>
<img src={satisfaction} alt="satisfaction" className='satisfaction' id='satisfaction' style={{ height: '270px'}}></img>
<img src={agreementtext}  alt="agreementtext" className='dialogue agreementtext' id='agreementtext' style={{ height: '150px'}}></img>

<img src={satisfactiontext} alt="satisfactiontext" className='dialogue satisfactiontext' id='satisfactiontext' style={{ height: '200px'}}></img>



        </div>)


        }




    


}






export { Page6 }