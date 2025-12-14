import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login =()=>{
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const navigate = useNavigate();
    const onClickContinue = () => {
        if (email){
            localStorage.setItem('email', email);
            navigate('/');
        } else {
            alert('Please enter a valid email address.');
        }
    }
    return(
        <div className='d-flex'>
            <div className='login-container'>
                <h1>BetterUp</h1>
                <h2 className='login-heading'>Login</h2>
                <div className='email-container'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input onChange={handleEmailChange} className='email-input' type="email" id="email" name="email" required/>
                    <a  href='' className='forgot'>Forget Password</a>
                </div>
                <button className='login-page-btn' type="button" onClick={onClickContinue}>Continue</button>    
                <a className='login-page-para'>Need help with confirmation instructions or unlock instructions?<br/>Privacy Policy</a>
            </div>
            <img className='login-page-image' src="https://cdn.prod.betterup.co/assets/registration/SHOT_06_TALOR_020_v4x1-a349a709cba0154b1c5f7ac2c30dde668e85fcfd24495c8dee1266a31872f27b.jpg"/>
        </div>
    )
}