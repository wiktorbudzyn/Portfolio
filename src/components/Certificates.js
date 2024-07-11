import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Certificates.css';

import certyfikat1 from '../assets/certificates/certyfikat1.jpg';
import certyfikat2 from '../assets/certificates/certyfikat2.jpg';
import certyfikat3 from '../assets/certificates/certyfikat3.jpg';
import certyfikat4 from '../assets/certificates/certyfikat4.jpg';
import certyfikat5 from '../assets/certificates/certyfikat5.jpg';
import certyfikat6 from '../assets/certificates/certyfikat6.jpg';
import certyfikat7 from '../assets/certificates/certyfikat7.jpg';
import certyfikat8 from '../assets/certificates/certyfikat8.jpg';
import certyfikat9 from '../assets/certificates/certyfikat9.jpg';
import certyfikat10 from '../assets/certificates/certyfikat10.jpg';
import certyfikat11 from '../assets/certificates/certyfikat11.jpg';
import certyfikat12 from '../assets/certificates/certyfikat12.jpg';
import certyfikat13 from '../assets/certificates/certyfikat13.jpg';
import certyfikat14 from '../assets/certificates/DALLE.jpg';
import certyfikat15 from '../assets/certificates/MySql.jpg';
import certyfikat16 from '../assets/certificates/React.jpg';
import certyfikat17 from '../assets/certificates/TypeScript.jpg';
import certyfikat18 from '../assets/certificates/Vue.jpg';
import certyfikat19 from '../assets/certificates/wp.jpg';

const certificates = [
    certyfikat1,
    certyfikat2,
    certyfikat3,
    certyfikat4,
    certyfikat5,
    certyfikat6,
    certyfikat7,
    certyfikat8,
    certyfikat9,
    certyfikat10,
    certyfikat11,
    certyfikat12,
    certyfikat13,
    certyfikat14,
    certyfikat15,
    certyfikat16,
    certyfikat17,
    certyfikat18,
    certyfikat19,
];

function Certificates() {
    return (
        <section className="CertificatesSection" id="certificates">
            <div className="Content">
                <h1>Certyfikaty i kursy</h1>
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                >
                    {certificates.map((certificate, index) => (
                        <div key={index}>
                            <img
                                src={certificate}
                                alt={`Certyfikat ${index + 1}`}
                                className="CertificateImage"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default Certificates;
