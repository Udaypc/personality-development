import './About.css'
import { Header } from '../Header';
export const About = () => {
  return (
    <div>
        <Header />
        <div className="about-first-container">
            <h1 className='about-first-h1'>Bringing the power of transformation to each and every person.</h1>
        </div>
        <div className='about-second-container'>
            <p className='about-second-p1'>Our mission: help people everywhere live their lives with greater clarity, purpose, and passion.</p>
            <p className='about-second-p2'>We believe that purpose and performance are an integrated journey. Since 2013 we have been pioneering transformation and peak performance in individuals, teams, and organizations. As the inventor of virtual coaching and the largest mental health and coaching startup in the world, we build and strengthen the mindsets, skills, and behaviors that help people achieve their full potential – in work, life, and all that they do. <br/><br/>BetterUp is the first Human Transformation Platform that scales whole-person behavior change, integrating into your flow of work to boost organizational performance and measurably impact key business outcomes. With behavioral science, analytics at scale, and evidence-based coaching to affect growth, we bring human transformation to organizations and self-actualization to people worldwide.</p>
        </div>
        <div className='about-third-container'>
            <img alt='about-third-container-img'  className='about-third-container-img' src='https://f.hubspotusercontent40.net/hubfs/9253440/Imported%20sitepage%20images/office-life2.jpg'/>
            <div>
                <hr className='hr'/>
                <h1 className='about-third-h1'>Our values</h1>
                <div className='d-flex col'>
                    <div className='about-third-container-text'>
                        <h1>Courage</h1>
                        <p>Dare often and greatly</p>
                    </div>
                    <div className='about-third-container-text'>
                        <h1>Craftpersonship</h1>
                        <p>Find meaning in what we do through crafting excellence.</p>
                    </div>
                </div>
                <div className='d-flex col'>
                    <div className='about-third-container-text'>
                        <h1>Playfulness</h1>
                        <p>Great ideas come from health and happiness.</p>
                    </div>
                    <div className='about-third-container-text'>
                        <h1>Grit</h1>
                        <p>Perseverance driven by determination and passion.</p>
                    </div>
                </div>
                <div className='d-flex col'>
                    <div className='about-third-container-text'>
                        <h1>Emphathy</h1>
                        <p>Innovation starts with understanding.</p>
                    </div>
                    <div className='about-third-container-text'>
                        <h1>Zest</h1>
                        <p>What sets you apart makes us unique.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}