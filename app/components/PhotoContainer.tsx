import { useState } from 'react';
import { PhotoContainerProps } from '~/utils';
import PhotoCard from './PhotoCard';

export default function PhotoContainer({ photos, layout, size, filePath, photoStyle, hideAnimation }: PhotoContainerProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleFullScreen = (index: number) => {
    setCurrentPhotoIndex(index);
    setIsFullScreen(true);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className="md:mt-12 sm:mt-16 lg:mt-2">
        <div className="flex flex-wrap justify-center items-center w-full mx-auto">
          {photos.map((photo, index) => (
            <>
              {layout === 'col' && (
                <div key={photo.id} className="w-full flex justify-center items-center">
                  <PhotoCard
                    photo={photo}
                    size={size}
                    filePath={filePath}
                    photoStyle={photoStyle}
                    hideAnimation={hideAnimation}
                    onClick={() => handleFullScreen(index)}
                  />
                </div>
              )}
              {layout === 'row' && (
                <div key={photo.id} className="flex flex-nowrap justify-center items-center">
                  <PhotoCard
                    photo={photo}
                    size={size}
                    filePath={filePath}
                    photoStyle={photoStyle}
                    hideAnimation={hideAnimation}
                    onClick={() => handleFullScreen(index)}
                  />
                </div>
              )}
              {layout === 'grid' && (
                <div key={photo.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center items-center">
                  <PhotoCard
                    photo={photo}
                    size={size}
                    filePath={filePath}
                    photoStyle={photoStyle}
                    hideAnimation={hideAnimation}
                    onClick={() => handleFullScreen(index)}
                  />
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsFullScreen(false)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={handlePrevPhoto}
          >
            &#9664;
          </button>
          <div>
            <img
              src={`/assets/${filePath}/${photos[currentPhotoIndex].src}`}
              alt={photos[currentPhotoIndex].alt}
              className="max-w-full max-h-full"
            />
            <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white z-100">
              <h2 className="font-bold text-md">{photos[currentPhotoIndex].title}</h2>
              <p className="text-sm">{photos[currentPhotoIndex].description}</p>
            </div>
          </div>

          <button
            className="absolute right-4 text-white text-2xl"
            onClick={handleNextPhoto}
          >
            &#9654;
          </button>
        </div>
      )}
    </>
  );
}