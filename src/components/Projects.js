import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Projects.css';
import LogoProject1 from '../assets/projects/mole-escape/mole-logo.png';
import LogoProject2 from '../assets/projects/radar-finansowy/radar-logo-white.png';
import LogoProject3 from '../assets/projects/car-race/car-race-logo.png';

const projects = [
    {
        id: 1,
        image: LogoProject2,
        description: 'Serwis do zarządzania budżetem',
        link: '/projekty/RadarFinansowy'
    },
    {
        id: 2,
        image: LogoProject1,
        description: 'Gra przeglądarkowa z rejestracją',
        link: '/projekty/MoleEscape'
    },
    {
        id: 3,
        image: LogoProject3,
        description: 'Prosta gra desktopowa',
        link: '/projekty/CarRace'
    },
];

function Projects() {
    const isMobile = window.innerWidth <= 840;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <div className="custom-slick-next">›</div>,
        prevArrow: <div className="custom-slick-prev">‹</div>,
    };

    return (
        <section className="ProjectsSection" id="projects">
            <div className="Content">
                <h1>Projekty</h1>
                {isMobile ? (
                    <div className="Carousel">
                        <button onClick={prevProject} className="CarouselButton">‹</button>
                        <Link to={projects[currentIndex].link} className="ProjectCard">
                            <img src={projects[currentIndex].image} alt={projects[currentIndex].description} className="ProjectImage" />
                            <p className="ProjectDescription">{projects[currentIndex].description}</p>
                            <button className="ProjectButton">Szczegółowy opis</button>
                        </Link>
                        <button onClick={nextProject} className="CarouselButton">›</button>
                    </div>
                ) : (
                    <Slider {...settings}>
                        {projects.map(project => (
                            <div key={project.id} className="ProjectCardWrapper">
                                <Link to={project.link} className="ProjectCard">
                                    <img src={project.image} alt={project.description} className="ProjectImage" />
                                    <p className="ProjectDescription">{project.description}</p>
                                    <button className="ProjectButton">Szczegółowy opis</button>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </section>
    );
}

export default Projects;
