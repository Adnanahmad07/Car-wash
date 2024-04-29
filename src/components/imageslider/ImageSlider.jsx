// import React, { useState } from 'react';
// import image1 from '../assets/image1.jpg.jpg'
// import image2 from '../assets/image2.jpg.jpg'
// import image3 from '../assets/image3.jpg.jpg'
// import image4 from '../assets/image4.jpg.jpg'

// const ImageSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [
//         { image1 },
//         { image2 },
//         { image3 },
//         { image4 }
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };

//     return (
//         <div className="image-slider">
//             <button onClick={prevSlide}>Prev</button>
//             <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//             <button onClick={nextSlide}>Next</button>
//         </div>
//     );
// };

// export default ImageSlider;
















// import React, { useState, useEffect } from 'react';


// const ImageSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [

//     ];


//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     };

//     useEffect(() => {
//         // Automatically switch to the next slide every 3 seconds
//         const intervalId = setInterval(nextSlide, 3000);

//         // Cleanup function to clear the interval when the component unmounts
//         return () => clearInterval(intervalId);
//     }, [currentIndex]); // Re-run effect when currentIndex changes

//     return (
//         <div className="image-slider">
//             <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         </div>
//     );
// };

// export default ImageSlider;
















import './imageslider.css'

import React, { useState, useEffect } from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [image1, image2, image3, image4];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 4000);

        return () => clearInterval(intervalId);
    }, [currentIndex]); // Re-run effect when currentIndex changes

    return (
        <div className="image-slider">
            <div className='imagesoverley'></div>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='images' />
        </div>
    );
};

export default ImageSlider;
