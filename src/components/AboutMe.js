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
                    Jestem studentem kierunku Sztuczna Inteligencja i Data Science na Politechnice Częstochowskiej, a także aktywnym Full Stack Developerem,
                    z pasją do tworzenia zaawansowanych rozwiązań technologicznych.
                    <br /><br />
                    Moja przygoda z informatyką zaczęła się od nieco przypadkowego wyboru technikum...
                    <button className="ReadMoreButton" onClick={handleReadMore}>Czytaj dalej</button>
                </p>
            </div>


            {showFullText && (
                <div className="Modal" onClick={handleClose}>
                    <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                        <span className="CloseButton" onClick={handleClose}>&times;</span>
                        <p className="text_full">
                            Jestem studentem kierunku Sztuczna Inteligencja i Data Science na Politechnice Częstochowskiej, a także aktywnym Full Stack Developerem,
                            z pasją do tworzenia zaawansowanych rozwiązań technologicznych. Moja przygoda z informatyką zaczęła się od nieco przypadkowego wyboru technikum
                            o profilu technik informatyk. Początkowo nie planowałem kariery w tej dziedzinie, ale z czasem, przekonałem się do programowania i postanowiłem
                            kontynuować naukę na studiach wyższych.
                            <br /><br />
                            W technikum nauczyłem się podstaw programowania i zarządzania systemami informatycznymi, co wzbudziło moją ciekawość na tyle,
                            że zdecydowałem się podjąć studiów inżynierskich na kierunku Informatyka, ze specjalizacją w programowaniu aplikacji internetowych.
                            <br /><br />
                            W trakcie studiów inżynierskich na Politechnice Częstochowskiej skupiłem się na tworzeniu zaawansowanych aplikacji webowych, co pozwoliło mi połączyć
                            moje zainteresowania technologią i programowaniem. Praca nad projektami z zakresu programowania aplikacji internetowych dała mi solidne podstawy, które
                            aktywnie staram się rozwijać.
                            <br /><br />
                            Obecnie w pracy zajmuje się tworzeniem interaktywnych i estetycznych stron internetowych, które są funkcjonalne i intuicyjne. Pracuję z
                            technologiami takimi jak XML, HTML, CSS, JavaScript oraz Python. Dbam o każdy etap projektów, od koncepcji, przez implementację, aż po wsparcie techniczne.
                            <br /><br />
                            Moje wcześniejsze doświadczenia obejmują również rozwijanie oraz testowanie gry na silniku Unity oraz zaprojektowanie i wdrożenie systemu powiadomień
                            dla mieszkańców JST, integrujących komunikację poprzez media społecznościowe.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default AboutMe;
