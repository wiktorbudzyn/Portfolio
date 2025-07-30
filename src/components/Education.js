import React from 'react';
import './Education.css';

const educationData = [
    {
        date: "02.2024 - 09.2025",
        institution: "Politechnika Częstochowska",
        course: "Sztuczna inteligencja i Data Science",
        degree: "Studia magisterskie"
    },
    {
        date: "10.2020 - 01.2024",
        institution: "Politechnika Częstochowska",
        course: "Informatyka",
        specialization: "Programowanie aplikacji internetowych",
        degree: "Studia inżynierskie"
    },
    {
        date: "09.2016 - 04.2020",
        institution: "Zespół Szkół nr 3",
        course: "Technik Informatyk",
        degree: "Technikum",
        city: "Ostrowiec Świętokrzyski"
    }
];

function Education() {
    return (
        <section className="EducationSection" id="education">
            <div className="Content">
                <h1>Wykształcenie</h1>
                <div className="EducationList">
                    {educationData.map((edu, index) => (
                        <div key={index} className="EducationItem">
                            <div className="DateInstitution">
                                <span className="Date">{edu.date}</span>
                                <span className="Institution">{edu.institution}</span>
                            </div>
                            <div className="Details">
                                <div className="Info">
                                    {edu.city && (
                                        <div className="InfoItem">
                                            <span className="Label">Miasto:</span>
                                            <span className="Value">{edu.city}</span>
                                        </div>
                                    )}
                                    <div className="InfoItem">
                                        <span className="Label">Kierunek:</span>
                                        <span className="Value">{edu.course}</span>
                                    </div>
                                    {edu.specialization && (
                                        <div className="InfoItem">
                                            <span className="Label">Specjalizacja:</span>
                                            <span className="Value">{edu.specialization}</span>
                                        </div>
                                    )}
                                    <div className="InfoItem">
                                        <span className="Label">Poziom wykształcenia:</span>
                                        <span className="Value">{edu.degree}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
