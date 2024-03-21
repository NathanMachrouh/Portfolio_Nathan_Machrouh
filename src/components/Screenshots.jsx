import React, { useState } from 'react';
import flecheGauche from '../assets/fleche-gauche.png';
import flecheDroite from '../assets/fleche-droit.png';

function Screenshots({ projet }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projet.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projet.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            {projet.images.length > 0 && (
                <div className="carousel">
                    <img src={flecheGauche} alt="Fleche de gauche" className="fleche gauche" onClick={prevSlide} />
                    <div className="screenshots-container">
                        <img
                            src={projet.images[currentIndex]}
                            alt={`Screenshot ${currentIndex + 1}`}
                            className="screenshots"
                        />
                    </div>
                    <img src={flecheDroite} alt="Fleche de droite" className="fleche droite" onClick={nextSlide} />
                </div>
            )}

            <div className="compteur-image">
                {projet.images.length > 0 && (
                    <p>{currentIndex + 1} / {projet.images.length}</p>
                )}
            </div>
        </div>
    );
}

export default Screenshots;
