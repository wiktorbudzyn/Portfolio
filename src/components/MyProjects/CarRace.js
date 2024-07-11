import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CarRace.css';
import carImage1 from '../../assets/projects/car-race/1.png';
import carImage2 from '../../assets/projects/car-race/2.png';
import carImage3 from '../../assets/projects/car-race/3.png';
import GitHubIcon from '../../assets/social/social2.png';

function CarRace() {

    useEffect(() => {
        document.body.classList.add('car-race-page');
        return () => {
            document.body.classList.remove('car-race-page');
        };
    }, []);

    const isMobile = window.innerWidth <= 840;
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [carImage1, carImage2, carImage3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={`ProjectCarDetailSection ${isMobile ? 'mobile' : ''}`} id="CarRace">
            {isMobile ? (
                <>
                    <div className="ProjectCarInfo">
                        <h1>Car Race</h1>
                        <div className="GithubLinkContainer">
                            <span>Zobacz na GitHubie</span>
                            <a href="https://github.com/wiktorbudzyn/Car---Race" className="GithubButton" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubIcon} alt="GitHub" className="GithubIcon" />
                            </a>
                        </div>
                        <p className="TechnologiesUsed"><b>Technologie:</b> #Python #Pygame</p>
                        <p className="ProjectCarDetailDescription">
                            Car Race to prosta gra wyścigowa, w której gracze mogą prowadzić samochód po ulicy, unikając innych aut i zbierając punkty za każdy ominięty samochód.
                            Gra została zaprojektowana i zaimplementowana przy użyciu biblioteki Pygame, co zapewnia płynne i dynamiczne doświadczenie użytkownika.
                            <br />  <br />
                            Gra została stworzona jako projekt na jednym z kursów na platformie UDEMY, gdzie nauczyłem się podstaw programowania w Pythonie oraz wykorzystania biblioteki
                            Pygame do tworzenia gier. Kurs ten dostarczył solidnej wiedzy na temat projektowania gier, optymalizacji kodu oraz zarządzania projektem w
                            środowisku programistycznym.
                        </p>
                        <div className="ProjectCarDetailCarousel">
                            <div className="CarCarousel">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Project Screenshot ${index + 1}`}
                                        className={`ProjectCarDetailImage ${index === currentSlide ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <Link to="/#projects" className="BackButton">Powrót</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="ProjectCarDetailCarousel">
                        <div className="Carcarousel">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Project Screenshot ${index + 1}`}
                                    className={`ProjectCarDetailImage ${index === currentSlide ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="ProjectCarInfo">
                        <h1>Car Race</h1>
                        <div className="GithubLinkContainer">
                            <span>Zobacz na GitHubie</span>
                            <a href="https://github.com/wiktorbudzyn/Car---Race" className="GithubButton" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubIcon} alt="GitHub" className="GithubIcon" />
                            </a>
                        </div>
                        <p className="TechnologiesUsed"><b>Technologie:</b> #Python #Pygame</p>
                        <p className="ProjectCarDetailDescription">
                            Car Race to prosta gra wyścigowa, w której gracze mogą prowadzić samochód po ulicy, unikając innych aut i zbierając punkty za każdy ominięty samochód.
                            Gra została zaprojektowana i zaimplementowana przy użyciu biblioteki Pygame, co zapewnia płynne i dynamiczne doświadczenie użytkownika.
                            <br />  <br />
                            Gra została stworzona jako projekt na jednym z kursów na platformie UDEMY, gdzie nauczyłem się podstaw programowania w Pythonie oraz wykorzystania biblioteki
                            Pygame do tworzenia gier. Kurs ten dostarczył solidnej wiedzy na temat projektowania gier, optymalizacji kodu oraz zarządzania projektem w
                            środowisku programistycznym.
                        </p>
                        <Link to="/#projects" className="BackButton">Powrót</Link>
                    </div>
                </>
            )}
        </section>
    );
}

export default CarRace;
