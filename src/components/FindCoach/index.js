import './find.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const FindCoach = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if(email){
            alert('Email submitted successfully!');
            navigate('/');
        }else{
            alert('Please enter a valid email address!');
        }
    };
  return (
    <div className="find-coach-container">
      <h1 className='find-coach-heading'>BetterUp</h1>
      <div className='coach-text-container'>
        <div className='find-coach-text'>
            <p className='f-p-1'>Your journey starts here</p>
            <p className='f-p-2'>Achieve more with a BetterUp Coach</p> 
            <p className='f-p-3'>BetterUp helps you achieve your goals with science-backed, one-on-one coaching. It only takes a minute to get matched.</p>
            <div className='coach-email-container'>
                <input onChange={handleEmailChange}  type="text" placeholder="Email address*" className='input-email-for-coach'/>       
                <button onClick={handleSubmit} className='find-coach-button'>Get started</button>
            </div>
            <p className='f-p-4'>Already a menber?<a href='/login'>Sign in here</a></p>
        </div>
        <img className='webcame-image' src='https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/Match.png'/>
      </div>
    </div>
  );
}