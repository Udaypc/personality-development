import "./communication.css";
import { Header } from '../Header';
import { useState } from 'react';
export const Communication = () => {
  const[id, setId] = useState(1);
  const rightToggle = () => {
    if(id===1){
      setId(2);
    } else if(id===2){
      setId(3);
    } else if(id===3){
      setId(1);
    }  
  }

  const leftToggle = () => {
    if(id === 1){
      setId(3);
    } else if(id === 2){
      setId(1);
    } else if(id === 3){
      setId(2);
    }  
  }
  return (
    <div>
        <Header />
        <div className="communication-first-container">       
            <h1>ONE-ON-ONE COMMUNICATION COACHING</h1>
            <h2>Master the art of communication</h2>
            <p>Unlock the power of effective communication. From public speaking to building stronger relationships, get high-quality coaching tailored to meet your specific needs.</p>
            <div className="d-flex">
                <input type='email' placeholder='Email address*'/>
                <button>Find your Coach</button>    
            </div>
        </div>
        <div className="communication-second-container">
            <div className="communication-second-container-text">
                <h1>How can communication coaching help you?</h1>
                <p>Improving your communication skills is crucial for success in all areas of life, from personal branding to professional and personal development. A communication coach can help you to express yourself effectively, build influence, and enhance relationships.</p>
            </div>
            <div className="communication-second-container-image">
              <div className="communication-second-container-image-item">
                <img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Illustrations/Illo_Communication.jpg" alt="Communication Coaching" />
                <h1>Public speaking</h1>
                <p>Captivate and persuade audiences of all sizes boosting personal and professional impact.</p>
              </div>
                <div className="communication-second-container-image-item">
                <img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Illustrations/Illo_Community.jpg" alt="Communication Coaching" />
                <h1>Executive presence</h1>
                <p>Develop a commanding presence that inspires confidence and respect.</p>
              </div>
              <div className="communication-second-container-image-item">
                <img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Illustrations/Illo_HighStakesConversations.jpg" alt="Communication Coaching" />
                <h1>Negotiations</h1>
                <p>Master negotiation techniques to get what you want while maintaining relationships.</p>
              </div>
              <div className="communication-second-container-image-item">
                <img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Illustrations/Illo_Influence.jpg" alt="Communication Coaching" />
                <h1>Building influence</h1>
                <p>Confidently shape the opinions and actions of others, expanding your impact.</p>
              </div>
            </div>        
        </div>   
        <div className="communication-third-container">
            <h1>“ My negotiation skills improved and I became more effective at giving and receiving feedback. My physical and mental wellbeing improved a lot. I developed good habits like daily mediation, gratitude, positive thinking, good eating habits, and improved communication. ”</h1>
            <p>- Member since May 2022</p>
        </div> 
        <div className="communication-fourth-container">
          <div className="d-flex">
            <img src="https://cdn-icons-png.flaticon.com/512/507/507257.png " alt="Communication Coach" className="arrow"onClick={leftToggle}  />
            <div className="communication-fourth-container-img">
              {id===1?<img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Screenshot%20Find%20Your%20Coach.svg" alt="Communication Coach" className="phone-image1"/>:""}
              {id===2?<img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Coach%20video%20call%20in%20app%20screenshot.png" alt="Communication Coach" className="phone-image2" />:""}
              {id===3?<img src="https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Screen%20(16).png" alt="Communication Coach" className="phone-image3" />:""}
              
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Communication Coach" className="arrow" onClick={rightToggle} />
          </div>
        </div>
    </div>
  );
}
