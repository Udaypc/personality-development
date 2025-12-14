
import {Header} from '../Header'
import './individual.css'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

export const Individual= () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/find-coach');
    } 
    return (<>
        <div>
        <Header fixed="top"/>
        </div>
        <div>
            <div className='individual-first-container'>
                <div className='top-text-container'>
                    <h1>ONLINE COACHING FOR INDIVIDUAL</h1>
                    <h2>Transform your life</h2>
                    <p>Make meaningful changes and become the best version of yourself. BetterUp's Coaches are here to support your personal & professional growth journey.</p>
                    <button onClick={handleClick}>Find your coach</button>
                </div>
                <video className='video' autoPlay loop muted playsInline>
                    <source src='https://www.betterup.com/hubfs/coaches.mp4' type='video/mp4' />
                </video>
            </div>
            <div className='individual-second-container'>
                <div className='individual-second-text-container'>
                    <h1>What is coaching?</h1>
                    <p>Coaching is a powerful partnership that helps individuals identify and achieve their personal and professional goals through guidance, support, and accountability. Whether you want to advance in your career, improve your leadership skills, or enhance your overall well-being, coaching empowers you to unlock your potential and make meaningful progress.</p>
                    <button onClick={handleClick}>Get started</button>
                </div>
                <Carousel  data-bs-theme="dark" className='carousel-container'>
                    <Carousel.Item  className='crousel-item'>
                        <h1>Carrer coaching</h1>
                        <p>Focused on helping individuals make informed decisions about their career paths, overcome professional challenges, and achieve their career goals. It covers aspects such as career exploration, transition, advancement, and performance improvement.</p>
                    </Carousel.Item>
                    <Carousel.Item  className='crousel-item second'>
                        <h1>Personal coaching</h1>
                        <p>Focused on improving the quality of life, health, and well-being of individuals. It involves setting and working towards goals related to personal growth, health, relationships, stress management, work-life balance, and more                        </p>
                    </Carousel.Item>
                    <Carousel.Item  className='crousel-item third'>
                        <h1>Communication coaching</h1>
                        <p>Focused on enhancing an individual's communication skills in various contexts, including personal, professional, and public settings. It aims to improve verbal, non-verbal, and written communication skills, making interactions more effective and fulfilling.</p>
                    </Carousel.Item>
                </Carousel>
            </div> 
            <div className='individual-third-container'>
                <h1>Who can benefit from coaching?</h1>
                <p>Coaching is for anyone looking to grow, improve, or navigate challenges in their personal or professional life. Some examples of who can benefit include:</p>
                <ul>
                    <li>Individuals feeling stuck or uncertain about their next steps.</li>
                    <li>Professionals seeking to advance in their careers or take on leadership roles.</li>
                    <li>Executives who want to improve their leadership effectiveness and decision-making skills.</li>
                    <li>Entrepreneurs looking for strategic guidance to grow their business.</li>
                    <li>Students & Young Professionals navigating career-choices & building resilience.</li>
                </ul>
            </div>
            <div className='individual-fourth-container'>
                <div className='individual-fourth-text-container'>
                    <h1>How coaching works?</h1>
                    <h2>Goal setting</h2>
                    <p>The process often begins with identifying and clarifying the members goals. These could be career-related, personal development, skill enhancement, or addressing specific challenges.</p>
                    <h2>Creating a plan</h2>
                    <p>Based on the goals and assessments, a Coach and member collaboratively develop a plan of action. This plan outlines the steps needed to achieve the set goals.</p>
                    <h2>Implementing strategies</h2>
                    <p>Members works on implementing these strategies, often with tasks or exercises to complete between coaching sessions.</p>
                    <h2>Ongoing support and guidance</h2>
                    <p>A Coach provides ongoing support, guidance, and accountability. They help the member navigate challenges and stay on track towards their goals.</p>
                </div>
                <img alt="" src='https://9253440.fs1.hubspotusercontent-na1.net/hubfs/9253440/d2c%20product%20mockup.png'/>
            </div>
        </div>
    </>);
}