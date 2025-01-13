import React from 'react';
import './MainSection.css';
import profileImage from '../assets/profile.jpg';

function MainSection() {
    return (
        <section className="MainSection" id="main-section">
            <div className="Content">
                <h1><span className="highlight">Junior Developer</span></h1>
                <p className='description'>
                    Hej! 👋 Miło Cię widzieć. 😊 <br /> Nazywam się Wiktor Budzyn. Jestem studentem kierunku Sztuczna Inteligencja i Data Science na Politechnice Częstochowskiej. 
                    Zapraszam do zapoznania się z moim portfolio!
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
