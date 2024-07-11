import React, { useState } from 'react';
import './Skills.css';
import searchIcon from '../assets/search.png';

const skills = {
    "Języki Programowania": ["C#", "Python 3.12", "JavaScript ECMAScript 14", "PHP", "MATLAB"],
    "Bazy Danych": ["MongoDB", "MySQL", "Oracle Database"],
    "Front-end": ["HTML 5", "CSS 3", "React", "Angular", "Vue"],
    "Back-end": ["Node.js", "Express.js", "ASP.NET Core"],
    "Narzędzia i Technologie": ["GitHub", "XML", "PyTorch", "Jira", "Trello", "Unity", "WordPress", "PyCharm", "Visual Studio Code", "Visual Studio 2022"]
};

function Skills() {
    const [openCategory, setOpenCategory] = useState(null);
    const isMobile = window.innerWidth <= 768;

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <section className="SkillsSection" id="skills">
            <div className="Content">
                <h1>Umiejętności</h1>
                {isMobile ? (
                    <div className="SkillsListMobile">
                        {Object.keys(skills).map(category => (
                            <div key={category} className="SkillsItem">
                                <div className="SkillsHeader" onClick={() => toggleCategory(category)}>
                                    <span>{category}</span>
                                    <img src={searchIcon} alt="search icon" className="SearchIcon" />
                                </div>
                                {openCategory === category && (
                                    <div className="SkillsDetails">
                                        {skills[category].map(skill => (
                                            <div key={skill} className="SkillItem">{skill}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="SkillsGrid">
                        <div className="SkillsColumn">
                            {["Języki Programowania", "Bazy Danych"].map(category => (
                                <div key={category} className="SkillsCategory">
                                    <h2>{category}</h2>
                                    <ul>
                                        {skills[category].map(skill => (
                                            <li key={skill} className="skill-item">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="SkillsColumn">
                            {["Front-end", "Back-end"].map(category => (
                                <div key={category} className="SkillsCategory">
                                    <h2>{category}</h2>
                                    <ul>
                                        {skills[category].map(skill => (
                                            <li key={skill} className="skill-item">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="SkillsColumn single-column">
                            <div className="SkillsCategory large-category">
                                <h2>Narzędzia i Technologie</h2>
                                <ul>
                                    {skills["Narzędzia i Technologie"].map(skill => (
                                        <li key={skill} className="skill-item">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;
