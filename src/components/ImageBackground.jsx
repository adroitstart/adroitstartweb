import React from 'react';

const ImageBackground = (props) => {
  const { children, className, backgroundImage } = props;

  return (
    <div className={className} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      {children}
    </div>
  );
};

export default ImageBackground;
