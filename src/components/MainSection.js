import React from 'react';
import './MainSection.css';
import profileImage from '../assets/profile.jpg';

function MainSection() {
    return (
        <section className="MainSection" id="main-section">
            <div className="Content">
                <h1><span className="highlight">Junior Developer</span></h1>
                <p className='description'>
                    Hej! 👋 Fajnie, że tu jesteś. 😊 <br /> Nazywam się Wiktor Budzyn. Kończę studia magisterskie z AI i Data Science. 
                    Zapraszam do zapoznania się z moją stroną!
                </p>
                <a href="/CV_BUDZYN_WIKTOR.pdf" className="ResumeButton2" target="_blank" rel="noopener noreferrer">Zobacz CV</a>
            </div>
            <div className="ProfileImage">
                <img src={profileImage} alt="Profile" />
            </div>
        </section>
    );
}

export default MainSection;
