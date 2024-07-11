import React, { useState } from 'react';
import './Experience.css';
import searchIcon from '../assets/search.png';

const experiences = [
    {
        company: "New Ventures",
        role: "Full Stack Developer",
        duration: "2024 - Obecnie",
        city: "Gdynia",
        employmentType: "Zdalnie",
        details: "Odpowiedzialność za koncepcję, implementację i rozwój interaktywnych stron internetowych oraz interfejsów użytkownika, zapewniając ich funkcjonalność i estetykę. Tworzenie oraz współpraca przy rozwijaniu oprogramowania zgodnie z określonymi wymaganiami, w tym tworzenie dokumentacji technicznej i użytkowej w językach takich jak XML, HTML, CSS oraz Python. Zapewnianie ciągłości działania oprogramowania poprzez monitorowanie, diagnozowanie i wprowadzanie niezbędnych zmian oraz aktualizacji, aby spełniało aktualne wymagania użytkowników. Opracowywanie, redagowanie i aktualizowanie przewodników wirtualnych, które pomagają użytkownikom w efektywnym korzystaniu z dostarczanych rozwiązań."
    },
    {
        company: "Educational Entertainment One",
        role: "Frontend Developer",
        duration: "2023",
        city: "Białystok",
        employmentType: "Zdalnie",
        details: "Projektowanie i rozwój architektury gier w silniku Unity. Praca nad frontendem gry koncentrowała się na tworzeniu estetycznych i funkcjonalnych interfejsów użytkownika. Testowanie rozwiązań i optymalizacja."
    },
    {
        company: "Lokalne Centrum Kompetencji",
        role: "Programista C#",
        duration: "2023",
        city: "Moszczenica",
        employmentType: "Hybrydowo",
        details: "Zaprojektowanie i wdrożenie systemu powiadomień dla mieszkańców JST, integrujący komunikację poprzez Twitter, Facebook i e-mail za pomocą Outlooka. System, napisany w C# i działający jako usługa Windows, wykorzystanie OAuth2 do bezpiecznego połączenia z API portali społecznościowych i serwera pocztowego."
    }
];

function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <section className="ExperienceSection" id="experience">
            <div className="Content">
                <h1>Doświadczenie zawodowe</h1>
                <ul className="ExperienceList">
                    {experiences.map((exp, index) => (
                        <li key={index} className="ExperienceItem" onClick={() => handleToggle(index)}>
                            <div className={`ExperienceButton ${isMobile ? 'mobile' : ''}`}>
                                <span className="Company">{exp.company}</span>
                                <div className="RoleDuration">
                                    <span className="Role">{exp.role}</span>
                                    <span className="Duration">{exp.duration}</span>
                                </div>
                                <span className="City">{exp.city}</span>
                                <span className="EmploymentType">{exp.employmentType}</span>
                                <img src={searchIcon} alt="search icon" className="SearchIcon" />
                            </div>
                        </li>
                    ))}
                </ul>
                {activeIndex !== null && (
                    <div className="Modal" onClick={() => setActiveIndex(null)}>
                        <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                            <span className="CloseButton" onClick={() => setActiveIndex(null)}>&times;</span>
                            {isMobile ? (
                                <>
                                    <h2>{experiences[activeIndex].company} <br /> {experiences[activeIndex].role}</h2>
                                    <div className="DetailsInfo">
                                        <span>{experiences[activeIndex].duration}, {experiences[activeIndex].city} - {experiences[activeIndex].employmentType} </span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="ModalHeader">
                                        <span className="CompanyModal">{experiences[activeIndex].company} - {experiences[activeIndex].role}</span>
                                    </div>
                                </>
                            )}
                            <p>{experiences[activeIndex].details}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Experience;
