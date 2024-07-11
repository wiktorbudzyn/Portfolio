import React, { useState } from 'react';
import './Hobby.css';
import hobby1 from '../assets/hobby/hobby1.jpg';
import hobby2 from '../assets/hobby/hobby2.jpg';
import hobby3 from '../assets/hobby/hobby3.jpg';
import hobby4 from '../assets/hobby/hobby4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const hobbiesDescription = `
 Jestem wielkim fanem piłki nożnej, szczególnie Premier League. Oglądanie meczów piłkarskich dostarcza mi mnóstwo emocji i radości.
 Budowanie zestawów z klocków LEGO to dla mnie idealny sposób na relaks.
 Jestem również fanem uniwersum Marvela - uwielbiam filmy oraz seriale związane z tym światem, zwłaszcza te dotyczące Spider-Mana.
 Zimą chętnie spędzam czas na stoku, doskonaląc swoje umiejętności narciarskie.
 W wolnym czasie lubię grać na konsoli, ostatnio głównie w takie gry jak FC24, Hogwarts Legacy czy CyberPunk 2077.
 Interesuję się także technologią i sztuczną inteligencją, staram się śledzić nowości w tej szybko rozwijającej się dziedzinie. `;

const Hobby = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReadMore = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <section className="HobbySection" id="hobby">
            <div className="Content">
                <h1>Hobby</h1>
                <div className="HobbyContainer">
                    <div className="HobbyDescription">
                        <p>{isMobile ? hobbiesDescription.substring(0, 104) + '...' : hobbiesDescription}</p>
                        {isMobile && <button className='ReadMoreHobby' onClick={handleReadMore}>Czytaj dalej</button>}
                    </div>
                    <div className="HobbyImages">
                        {isMobile ? (
                            <Carousel autoPlay
                                interval={3000}
                                infiniteLoop
                                showThumbs={false}
                                showStatus={false}
                            >
                                <div>
                                    <img src={hobby1} alt="Hobby 1" />
                                </div>
                                <div>
                                    <img src={hobby3} alt="Hobby 2" />
                                </div>
                                <div>
                                    <img src={hobby4} alt="Hobby 3" />
                                </div>
                                <div>
                                    <img src={hobby2} alt="Hobby 4" />
                                </div>
                            </Carousel>
                        ) : (
                            <>
                                <div className="ImageRow">
                                    <img src={hobby1} alt="Hobby 1" className="LargeImage" />
                                    <div className="SmallImagesColumn">
                                        <img src={hobby3} alt="Hobby 2" className="SmallImage1" />
                                        <img src={hobby4} alt="Hobby 3" className="SmallImage2" />
                                    </div>
                                </div>
                                <div className="ImageRow">
                                    <img src={hobby2} alt="Hobby 4" className="LargeImage2" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="ModalHobby" onClick={closeModal}>
                    <div className="ModalContentHobby">
                        <span className="CloseButtonHobby" onClick={closeModal}>&times;</span>
                        <p className='HobbyDescriptionFUllText'>{hobbiesDescription}</p>
                    </div>
                </div>
            )
            }
        </section >
    );
};

export default Hobby;
