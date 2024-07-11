import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import social1 from '../assets/social/social1.png';
import social2 from '../assets/social/social2.png';
import social3 from '../assets/social/social3.png';
import social4 from '../assets/social/social4.png';
import social5 from '../assets/social/social5.png';

function Header({ scrollToSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    const handleNavigation = (anchor) => {
        scrollToSection(anchor.slice(1));
        setActiveSection(anchor.slice(1));
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about-me', 'experience', 'skills', 'education', 'projects', 'certificates', 'hobby', 'contact'];
            let found = false;
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100 && !found) {
                        setActiveSection(section);
                        found = true;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="Header">
            <div className="LogoContainer">
                <div className="MenuIcon" onClick={handleMenuToggle}>
                    {isMenuOpen ? '✕' : '☰'}
                </div>
                <div className="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    {`{ wiktor-budzyn.dev }`}
                </div>
            </div>
            <div className="ButtonGroup">
                <a href="/CV_BUDZYN_WIKTOR.pdf" className="ResumeButton" target="_blank" rel="noopener noreferrer">Zobacz CV</a>
            </div>
            {isMenuOpen && (
                <nav className="DropdownMenu">
                    <ul>
                        <Link to="/#about-me"><li onClick={() => handleNavigation('#about-me')} className={activeSection === 'about-me' ? 'active' : ''}>
                            - O mnie
                        </li></Link>
                        <Link to="/#experience"><li onClick={() => handleNavigation('#experience')} className={activeSection === 'experience' ? 'active' : ''}>
                            - Doświadczenie zawodowe
                        </li></Link>
                        <Link to="/#skills"><li onClick={() => handleNavigation('#skills')} className={activeSection === 'skills' ? 'active' : ''}>
                            - Umiejętności
                        </li></Link>
                        <Link to="/#education"><li onClick={() => handleNavigation('#education')} className={activeSection === 'education' ? 'active' : ''}>
                            - Wykształcenie
                        </li></Link>
                        <Link to="/#projects"><li onClick={() => handleNavigation('#projects')} className={activeSection === 'projects' ? 'active' : ''}>
                            - Projekty
                        </li></Link>
                        <Link to="/#certificates"><li onClick={() => handleNavigation('#certificates')} className={activeSection === 'certificates' ? 'active' : ''}>
                            - Certyfikaty i kursy
                        </li></Link>
                        <Link to="/#hobby"><li onClick={() => handleNavigation('#hobby')} className={activeSection === 'hobby' ? 'active' : ''}>
                            - Hobby
                        </li></Link>
                        <Link to="/#contact"><li onClick={() => handleNavigation('#contact')} className={activeSection === 'contact' ? 'active' : ''}>
                            - Kontakt
                        </li></Link>
                    </ul>
                    <div className="SocialIcons">
                        <a href="https://github.com/wiktorbudzyn" target="_blank" rel="noopener noreferrer">
                            <img src={social2} alt="social2" className="SocialIcon" />
                        </a>
                        <a href="https://www.linkedin.com/in/wiktor-budzyn/" target="_blank" rel="noopener noreferrer">
                            <img src={social1} alt="social1" className="SocialIcon" />
                        </a>
                        <a href="https://wa.me/506898471" target="_blank" rel="noopener noreferrer">
                            <img src={social5} alt="social5" className="SocialIcon" />
                        </a>
                        <a href="https://www.facebook.com/wikobobo/" target="_blank" rel="noopener noreferrer">
                            <img src={social4} alt="social4" className="SocialIcon" />
                        </a>
                        <a href="https://x.com/BudzynWiktor" target="_blank" rel="noopener noreferrer">
                            <img src={social3} alt="social3" className="SocialIcon" />
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
