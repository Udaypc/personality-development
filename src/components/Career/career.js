import './career.css';
import { Header } from '../Header';
import Carousel from 'react-bootstrap/Carousel';
export const Career = () => {  
  return (
    <>
    <Header/>
    <div className="career-first-section">
      <h1>ONLINE CREER COACHING</h1>
      <h2>Accelerate your career path with a certified career Coach.</h2>
      <p>Whether you're climbing the corporate ladder, navigating a transition, or trying to balance your current role– do it more effectively with a Coach.</p>
      <div>
        <input type='email' placeholder='Email address*'/>
        <button>Find your coach</button>
      </div>
    </div>
    <div className="career-second-section">
        <div className='career-second-section-text'>
            <h1>How can career coaching help you?</h1>
            <p>Regardless of where you are on your career path, a career Coach can help clarify your career goals, identify your high-impact growth areas, and strategize for advancing your role or pivoting into a new one.</p>
            <p>Your Coach is your accountability partner. Use their years of industry-specific experience to help you navigate the complexities of the professional world.</p>
        </div>
        <Carousel  data-bs-theme="dark" className='carousel-container'>
            <Carousel.Item  className='career-crousel-item'>
                <h1>Carrer <br/> advancement</h1>
                <p>Enhance your career through a bespoke coaching strategy crafted for you. Benefit from guidance and insights to accelerate your career development and growth.</p>
            </Carousel.Item>
            <Carousel.Item  className='career-crousel-item second'>
                <h1>Career <br/> transition</h1>
                <p>Navigate your career change with confidence. Create a personalized action plan with the guidance you need for a seamless transition. From interview preparation to salary negotiation, our Career Coaches support you at each step.</p>
            </Carousel.Item>
            <Carousel.Item  className=' career-crousel-item third'>
                <h1>Leadership <br/> development</h1>
                <p>Acquire the skills to motivate, guide, and propel your team and organization towards newfound achievements.</p>
            </Carousel.Item>
            <Carousel.Item  className=' career-crousel-item third'>
                <h1>Building <br/>influence</h1>
                <p>Learn to wield influence effectively. Become a leading voice in your industry through strategic personal branding and networking that leverages your unique personality and values.</p>
            </Carousel.Item>
        </Carousel>
    </div>
    <div className="career-third-section">
      <div className='career-third-section-text'>
        <h1>Highly vetted Coaches</h1>
        <p>Discover the world's largest network of certified coaches at BetterUp, where only the top 9% of applicants are accepted. We ensure unparalleled quality by rigorously vetting each coach to meet your high standards.</p>  
      </div> 
      <div className='career-third-section-text'>
        <h1>Globally diverse experts</h1>
        <p>Our extensive network features over 4,000 coaches with expertise in more than 30 industries, covering all time zones in over 70 countries.</p>
      </div>
      <div className='career-third-section-text'>
        <h1>Proven industry leaders</h1>
        <p>BetterUp Coaches are not just experts in coaching; they bring an average of 12 years of management experience to the table with 45% holding VP-level leadership positions or higher.</p>
      </div>
    </div>
    <div className="career-fourth-section">
      <h1>Take the next step in your career journey</h1>
      <p>Unlock your full potential with BetterUp’s expert career Coaches.</p>
      <div className='d-flex'>
        <input type='email' placeholder='Email address*'/>
        <button>Find your coach</button>
      </div>
    </div>
    </>
  );
}