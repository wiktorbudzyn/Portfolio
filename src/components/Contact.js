import React, { useRef, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import social1 from '../assets/social/social1.png';
import social2 from '../assets/social/social2.png';
import social3 from '../assets/social/social3.png';
import social4 from '../assets/social/social4.png';
import social5 from '../assets/social/social5.png';

function Contact() {
    const [state, handleSubmit] = useForm("mblrrwgg");
    const formRef = useRef(null);
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        if (state.succeeded) {
            formRef.current.reset();
        }
    }, [state.succeeded]);

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const regex = /^[0-9]{0,9}$/;
        if (regex.test(value)) {
            setPhoneError('');
        } else {
            setPhoneError('Telefon może zawierać tylko cyfry i musi mieć dokładnie 9 cyfr.');
        }
    };

    const validateForm = (e) => {
        const phone = e.target.phone.value;
        if (phone && phone.length !== 9) {
            setPhoneError('Telefon musi mieć dokładnie 9 cyfr.');
            e.preventDefault();
        } else {
            setPhoneError('');
        }
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <section className="ContactSection" id="contact">
            <div className="Content">
                <h1>Kontakt</h1>
                <div className={`ContactContainer ${isMobile ? 'mobile' : ''}`}>
                    {!isMobile && (
                        <form onSubmit={handleSubmit} className="ContactForm" ref={formRef} onSubmitCapture={validateForm}>
                            <label htmlFor="name">Imię <span className='MUST'>(WYMAGANE)</span></label>
                            <input id="name" type="text" name="name" required />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />

                            <label htmlFor="phone">Telefon</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                pattern="[0-9]{9}"
                                maxLength="9"
                                onChange={handlePhoneChange}
                            />
                            {phoneError && <p className="ValidationError">{phoneError}</p>}

                            <label htmlFor="email">E-mail <span className='MUST'>(WYMAGANE)</span></label>
                            <input id="email" type="email" name="email" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />

                            <label htmlFor="message">Treść <span className='MUST'>(WYMAGANE)</span></label>
                            <textarea id="message" name="message" required />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />

                            <button type="submit" disabled={state.submitting}>Wyślij</button>
                            {state.succeeded && <p className="SuccessMessage">Dziękujemy za wiadomość!</p>}
                        </form>
                    )}
                    <div className="ContactInfo">
                        <p>W celu współpracy proszę o kontakt. 🖥️</p>
                        <p>📱 +48 506 898 471</p>
                        <p>📧 wiktor.budzyn87@gmail.com</p>
                        <div className="SocialIcons">
                            <a href="https://github.com/wiktorbudzyn" target="_blank" rel="noopener noreferrer">
                                <img src={social2} alt="social2" className="SocialIcon" />
                            </a>
                            <a href="https://www.linkedin.com/in/wiktor-budzyn/" target="_blank" rel="noopener noreferrer">
                                <img src={social1} alt="social1" className="SocialIcon" />
                            </a>
                            <a href="https://wa.me/506898471" target="_blank" rel="noopener noreferrer">
                                <img src={social5} alt="social5" className="SocialIcon" />
                            </a>
                            <a href="https://www.facebook.com/wikobobo/" target="_blank" rel="noopener noreferrer">
                                <img src={social4} alt="social4" className="SocialIcon" />
                            </a>
                            <a href="https://x.com/BudzynWiktor" target="_blank" rel="noopener noreferrer">
                                <img src={social3} alt="social3" className="SocialIcon" />
                            </a>

                        </div>
                        <div className="Footer">
                            <p>Strona została zaprojektowana i wykonana w technologii React przez Wiktora Budzyna.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
