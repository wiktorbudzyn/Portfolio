import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MoleEscape.css';
import projectImage1 from '../../assets/projects/mole-escape/1.png';
import projectImage2 from '../../assets/projects/mole-escape/2.png';
import projectImage3 from '../../assets/projects/mole-escape/3.png';
import projectImage4 from '../../assets/projects/mole-escape/4.png';
import projectImage5 from '../../assets/projects/mole-escape/5.png';
import GitHubIcon from '../../assets/social/social2.png';

function MoleEscape() {

    useEffect(() => {
        document.body.classList.add('mole-escape-page');
        return () => {
            document.body.classList.remove('mole-escape-page');
        };
    }, []);

    const isMobile = window.innerWidth <= 840;
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [projectImage1, projectImage2, projectImage3, projectImage4, projectImage5];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={`ProjectDetailSection ${isMobile ? 'mobile' : ''}`} id="MoleEscape">
            {isMobile ? (
                <>
                    <div className="ProjectInfo">
                        <h1>Mole Escape</h1>
                        <div className="GithubLinkContainer">
                            <span>Zobacz na GitHubie</span>
                            <a href="https://github.com/wiktorbudzyn/Krecik---gra" className="GithubButton" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubIcon} alt="GitHub" className="GithubIcon" />
                            </a>
                        </div>
                        <p className="TechnologiesUsed"><b>Technologie:</b> #JavaScript #Canvas #MERN #MongoDB #Express #React #Node #HTML #CSS</p>
                        <p className="ProjectDetailDescription">
                            Mole Escape to przeglądarkowa gra w stylu rysunkowym, inspirowana bajkami z lat 2000-2010, stworzona w parze w celu zaliczenia jednego z przedmiotów na studiach.
                            Gra jest intuicyjna i łatwa w obsłudze, dzięki czemu mogą w nią grać użytkownicy bez zaawansowanej wiedzy informatycznej.
                            <br />  <br />
                            Główne funkcjonalności: <br />
                            Logowanie i rejestracja: Użytkownik może założyć konto, logować się i zarządzać swoim profilem.
                            Główna mechanika gry: Gracz steruje postacią krecika, zbierając owoce i unikając przeszkód. Gra kończy się, gdy krecik napotka przeciwnika,
                            a wynik jest zapisywany w bazie danych.
                            Ranking graczy: Top 5 najlepszych wyników graczy jest wyświetlane na stronie głównej.
                            Interfejs użytkownika: Gra posiada różne ekrany, w tym ekran logowania, rejestracji, główny ekran gry oraz ekran profilu użytkownika.
                            <br />  <br />
                            Technologie i narzędzia:<br />
                            Frontend: Aplikacja została zbudowana przy użyciu HTML, CSS oraz JavaScript.
                            Backend: Serwer obsługujący grę został stworzony w Node.js z wykorzystaniem frameworka Express.
                            Komunikacja z bazą danych MongoDB odbywa się za pomocą Mongoose.
                            Baza danych: MongoDB przechowuje dane użytkowników oraz wyniki gry. Obsługiwane operacje obejmują logowanie, rejestrację,
                            aktualizację profilu, wylogowanie oraz zapis wyników gry.
                        </p>
                        <div className="ProjectDetailCarousel">
                            <div className="carousel">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Project Screenshot ${index + 1}`}
                                        className={`ProjectDetailImage ${index === currentSlide ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <Link to="/#projects" className="BackButton">Powrót</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="ProjectDetailImages">
                        <img src={projectImage1} alt="Project Screenshot 1" className="ProjectDetailImage" />
                        <img src={projectImage2} alt="Project Screenshot 2" className="ProjectDetailImage" />
                        <img src={projectImage3} alt="Project Screenshot 3" className="ProjectDetailImage" />
                        <img src={projectImage4} alt="Project Screenshot 4" className="ProjectDetailImage" />
                        <img src={projectImage5} alt="Project Screenshot 5" className="ProjectDetailImage" />
                    </div>
                    <div className="ProjectInfo">
                        <h1>Mole Escape</h1>
                        <div className="GithubLinkContainer">
                            <span>Zobacz na GitHubie</span>
                            <a href="https://github.com/wiktorbudzyn/Krecik---gra" className="GithubButton" target="_blank" rel="noopener noreferrer">
                                <img src={GitHubIcon} alt="GitHub" className="GithubIcon" />
                            </a>
                        </div>
                        <p className="TechnologiesUsed"><b>Technologie:</b> #JavaScript #Canvas #MERN #MongoDB #Express #React #Node #HTML #CSS</p>

                        <p className="ProjectDetailDescription">
                            Mole Escape to przeglądarkowa gra w stylu rysunkowym, inspirowana bajkami z lat 2000-2010, stworzona w parze w celu zaliczenia jednego z przedmiotów na studiach.
                            Gra jest intuicyjna i łatwa w obsłudze, dzięki czemu mogą w nią grać użytkownicy bez zaawansowanej wiedzy informatycznej.
                            <br />  <br />
                            Główne funkcjonalności: <br />
                            Logowanie i rejestracja: Użytkownik może założyć konto, logować się i zarządzać swoim profilem.
                            Główna mechanika gry: Gracz steruje postacią krecika, zbierając owoce i unikając przeszkód. Gra kończy się, gdy krecik napotka przeciwnika,
                            a wynik jest zapisywany w bazie danych.
                            Ranking graczy: Top 5 najlepszych wyników graczy jest wyświetlane na stronie głównej.
                            Interfejs użytkownika: Gra posiada różne ekrany, w tym ekran logowania, rejestracji, główny ekran gry oraz ekran profilu użytkownika.
                            <br />  <br />
                            Technologie i narzędzia:<br />
                            Frontend: Aplikacja została zbudowana przy użyciu HTML, CSS oraz JavaScript.
                            Backend: Serwer obsługujący grę został stworzony w Node.js z wykorzystaniem frameworka Express.
                            Komunikacja z bazą danych MongoDB odbywa się za pomocą Mongoose.
                            Baza danych: MongoDB przechowuje dane użytkowników oraz wyniki gry. Obsługiwane operacje obejmują logowanie, rejestrację,
                            aktualizację profilu, wylogowanie oraz zapis wyników gry.
                        </p>
                        <Link to="/#projects" className="BackButton">Powrót</Link>
                    </div>
                </>
            )}
        </section>
    );
}

export default MoleEscape;
