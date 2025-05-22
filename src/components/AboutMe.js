import React, { useState } from 'react';
import './AboutMe.css';
import profileImage from '../assets/profile2.jpg';

function AboutMe() {
    const [showFullText, setShowFullText] = useState(false);

    const handleReadMore = () => {
        setShowFullText(true);
    };

    const handleClose = () => {
        setShowFullText(false);
    };

    return (
        <section className="AboutMe" id="about-me">
            <div className="ProfileImage2">
                <img src={profileImage} alt="Profile2" />
            </div>
            <div className="Content">
                <h1>O mnie</h1>
                <p className="text_short">
                    Jestem studentem ostatniego semestru kierunku Sztuczna Inteligencja i Data Science na Politechnice Częstochowskiej oraz początkującym programistą. 
                    <br /><br />
                    Moja przygoda z IT zaczęła się przypadkowo...
                    <button className="ReadMoreButton" onClick={handleReadMore}>Czytaj dalej</button>
                </p>
            </div>


            {showFullText && (
                <div className="Modal" onClick={handleClose}>
                    <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                        <span className="CloseButton" onClick={handleClose}>&times;</span>
                        <p className="text_full">
                            Jestem studentem ostatniego semestru kierunku Sztuczna Inteligencja i Data Science na Politechnice Częstochowskiej oraz początkującym programistą. 
                            Moja przygoda z IT zaczęła się przypadkowo, od wyboru technikum informatycznego. Z czasem odkryłem, że programowanie to coś, co naprawdę mnie wciąga. 
                            Dlatego kontynuowałem naukę na studiach inżynierskich z informatyki, ze specjalizacją w programowaniu aplikacji internetowych.
                            <br /><br />
                            Podczas studiów zdobyłem solidne podstawy w tworzeniu aplikacji webowych oraz pracy z frontendem i backendem. 
                            Obecnie skupiam się na technologiach takich jak Python, HTML, CSS, JavaScript, XML, a także bibliotekach i frameworkach 
                            wspierających rozwój AI i tworzenie interaktywnych aplikacji.
                            <br /><br />
                            Mam za sobą doświadczenie zawodowe jako Full Stack Developer, gdzie odpowiadałem m.in. za projektowanie i implementację komponentów aplikacji, 
                            integrację danych oraz rozwój systemów.
                            <br /><br />
                            Pracowałem też nad projektami akademickimi i indywidualnymi, m.in. grą stworzoną w silniku Unity oraz systemem powiadomień dla mieszkańców JST, 
                            integrującym media społecznościowe.
                            <br /><br />
                            Szukam możliwości dalszego rozwoju w IT – w szczególności w obszarach frontend, Python i AI – i jestem otwarty na pracę zdalną, 
                            hybrydową lub stacjonarną.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default AboutMe;
