import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RadarFinansowy.css';
import projectImage1 from '../../assets/projects/radar-finansowy/1.png';
import projectImage2 from '../../assets/projects/radar-finansowy/2.png';
import projectImage3 from '../../assets/projects/radar-finansowy/3.png';
import projectImage4 from '../../assets/projects/radar-finansowy/4.png';
import projectImage5 from '../../assets/projects/radar-finansowy/5.png';
import projectImage6 from '../../assets/projects/radar-finansowy/6.png';
import projectImage7 from '../../assets/projects/radar-finansowy/7.png';
import projectImage8 from '../../assets/projects/radar-finansowy/8.png';
import projectImage9 from '../../assets/projects/radar-finansowy/9.png';
import projectImage10 from '../../assets/projects/radar-finansowy/10.png';
import projectImage11 from '../../assets/projects/radar-finansowy/11.png';
import projectImage12 from '../../assets/projects/radar-finansowy/12.png';
import projectImage14 from '../../assets/projects/radar-finansowy/14.png';
import projectImage15 from '../../assets/projects/radar-finansowy/15.png';
import projectImage16 from '../../assets/projects/radar-finansowy/16.png';
import projectImage17 from '../../assets/projects/radar-finansowy/17.png';
import projectImage18 from '../../assets/projects/radar-finansowy/18.png';
import projectImage19 from '../../assets/projects/radar-finansowy/19.png';
import GitHubIcon from '../../assets/social/social2.png';

const images = [
    projectImage1, projectImage2, projectImage3, projectImage4, projectImage5, projectImage6,
    projectImage7, projectImage8, projectImage9, projectImage10, projectImage11, projectImage12,
    projectImage14, projectImage15, projectImage16, projectImage17, projectImage18, projectImage19
];

function RadarFinansowy() {
    useEffect(() => {
        document.body.classList.add('radar-finansowy-page');
        return () => {
            document.body.classList.remove('radar-finansowy-page');
        };
    }, []);

    const isMobile = window.innerWidth <= 840;

    return (
        <section className={`ProjectDetailSection ${isMobile ? 'mobile' : ''}`} id="RadarFinansowy">
            {!isMobile && (
                <div className="ProjectDetailImages">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Project Screenshot ${index + 1}`} className="ProjectDetailImageRadar" />
                    ))}
                    <Link to='/#projects' className="BackButton">Powrót</Link>

                </div>
            )}
            <div className="ProjectInfo">
                <h1>Radar Finansowy</h1>
                <div className="GithubLinkContainer">
                    <span>Zobacz na GitHubie</span>
                    <a href="https://github.com/wiktorbudzyn/Radar---Finansowy" className="GithubButton" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" className="GithubIcon" />
                    </a>
                </div>
                <p className="TechnologiesUsed"><b>Technologie:</b> #JavaScript #MERN #MongoDB #Express #React #Node #JWT #HTML #CSS</p>
                <p className="ProjectDetailDescription">
                    <b>Radar Finansowy</b> to zaawansowana aplikacja internetowa stworzona w ramach pracy inżynierskiej. Projekt wykorzystuje nowoczesny stos technologiczny MERN,
                    który integruje MongoDB, Express.js, React.js oraz Node.js. Ten wybór technologii zapewnia efektywność, skalowalność i prostotę w utrzymaniu projektu,
                    dzięki jednolitemu użyciu języka JavaScript w całym stosie.
                    <br /> <br /> <br />
                    <b>Wykorzystane Technologie</b><br /> <br />
                    W projekcie zastosowano MongoDB jako bazę danych NoSQL, co umożliwia elastyczne i skalowalne przechowywanie danych. Express.js, działający na Node.js,
                    służy do budowy aplikacji internetowych oraz interfejsów API. React.js, popularna biblioteka JavaScript, umożliwia tworzenie dynamicznych i
                    interaktywnych interfejsów użytkownika. Node.js pozwala na tworzenie zarówno front-endu, jak i back-endu, co usprawnia cały proces rozwoju aplikacji.
                    <br /> <br />
                    Backend projektu został wzbogacony o biblioteki takie jak jsonwebtoken (JWT) do autoryzacji użytkowników, joi do walidacji danych,
                    bcrypt do haszowania haseł, multer do przesyłania plików, cors do zarządzania polityką CORS oraz dotenv do zarządzania zmiennymi środowiskowymi.
                    W frontendzie wykorzystano react-router-dom do zarządzania trasami, axios do tworzenia żądań HTTP, react-bootstrap do tworzenia interfejsu użytkownika,
                    chart.js do tworzenia wykresów oraz react-icons do wzbogacenia interfejsu o ikony.
                    <br /> <br /> <br />
                    <b>Funkcjonalności Aplikacji</b> <br /> <br />
                    Aby skorzystać z usług Radar Finansowy, konieczna jest rejestracja użytkownika, podczas której podaje się imię, nazwisko, adres e-mail oraz hasło.
                    Po zarejestrowaniu, logowanie do systemu odbywa się przez wprowadzenie e-maila i hasła. Użytkownicy mogą tworzyć, edytować i usuwać wiele portfeli
                    finansowych, określając ich nazwy oraz budżety.
                    <br /><br />
                    W ramach każdego portfela, użytkownik ma możliwość dodawania kategorii dla wydatków i przychodów,
                    które mogą być edytowane lub usuwane. Każda transakcja jest rejestrowana z uwzględnieniem typu (wydatek lub przychód), portfela, kategorii, kwoty,
                    daty oraz sposobu płatności, co pozwala na dokładne śledzenie finansów. Aplikacja oferuje również funkcję wizualizacji wydatków za pomocą wykresu
                    kołowego, a także pasek postępu pokazujący poziom wydatków w poszczególnych kategoriach.
                    <br /> <br />
                    W zakładce transakcji użytkownik może przeglądać
                    wszystkie swoje operacje finansowe, filtrować je według różnych okresów oraz edytować i usuwać poszczególne wpisy. Projekt umożliwia także zarządzanie
                    celami finansowymi. Użytkownicy mogą definiować cele, określając ich nazwę, kwotę oraz termin realizacji. Każdy cel jest monitorowany za pomocą paska
                    postępu, który pokazuje, ile środków zostało już zgromadzonych, a ile jeszcze potrzeba. Po osiągnięciu celu, użytkownik otrzymuje potwierdzenie sukcesu.
                    <br /> <br />
                    W zakładce kontaktowej dostępne są różne formy kontaktu z Radarem Finansowym, linki do mediów społecznościowych oraz interaktywna mapa z lokalizacją.
                    Panel użytkownika umożliwia zarządzanie danymi profilowymi, takimi jak avatar, imię, nazwisko oraz e-mail.
                    <br /> <br /> <br />
                    <b>Bezpieczeństwo i Rozwój</b>
                    <br /> <br />
                    Radar Finansowy został zaprojektowany z myślą o bezpieczeństwie użytkowników. Rejestracja i logowanie do systemu są zabezpieczone za pomocą technologii JSON Web Token
                    (JWT) oraz haszowania haseł, co gwarantuje ochronę danych. Umożliwienie tworzenia wielu portfeli finansowych, kategorii wydatków i przychodów, a także rejestrowanie
                    transakcji zapewnia użytkownikom elastyczność w zarządzaniu swoimi środkami.
                    <br /> <br />
                    System można w przyszłości bardzo łatwo rozwinąć o nowe funkcjonalności. Można dodać więcej statystyk, wykresów i zależności między wydatkami, aby jeszcze bardziej
                    ułatwić użytkownikom kontrolowanie swoich finansów. Można również zastosować sztuczną inteligencję, która pomagałaby określać wpływy na konto na podstawie analizy z kilku
                    ostatnich miesięcy używania aplikacji. Również system mógłby zostać rozbudowany o funkcje automatycznego importu danych transakcyjnych z kont bankowych.
                </p>
                <Link to="/#projects" className="BackButton">Powrót</Link>
            </div>
            {isMobile && (
                <div className="ProjectDetailImages">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Project Screenshot ${index + 1}`} className="ProjectDetailImageRadar" />
                    ))}
                    <Link to='/#projects' className="BackButton">Powrót</Link>

                </div>
            )}
        </section>
    );
}

export default RadarFinansowy;
