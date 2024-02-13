import { useState, useEffect } from 'react';

const images = [
  '/images/slide-4.jpg',
  '/images/slide-7.jpg',
  '/images/slide-1.jpg',
];

const Hero = ({ children }: any ) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(index => (index + 1) % images.length);
      setIsLoaded(false);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section style={{ paddingBottom: "12vh" }}>
      <div
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className={`mt-24 absolute inset-0 bg-black opacity-80 transition-opacity duration-1000 ease-in-out ${
            isLoaded ? 'opacity-0' : ''
          }`}
        ></div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 object-cover h-full w-full transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? 'opacity-40' : 'opacity-0'
            }`}
            onLoad={handleLoad}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
