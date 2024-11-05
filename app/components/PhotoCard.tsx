import { Photo } from '~/utils';

export default function PhotoCard(
  { photo, 
    size, 
    filePath, 
    photoStyle,
    hideAnimation,
    onClick
  }: { 
    photo: Photo, 
    size?: string, 
    filePath: string,
    photoStyle: string,
    hideAnimation?: boolean,
    onClick: () => void
  }) {
  return (
    <div 
      className={`m-2 flex justify-center items-center bg-white rounded-lg overflow-hidden ${hideAnimation ? '' : 'transform transition-all duration-500 group hover:scale-110'} ${
        size === 'small' ? 'w-48 h-48' :
        size === 'medium' ? 'w-64 h-64' :
        size === 'large' ? 'w-[85%]' :
        'w-full h-full'
      }`}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={`/assets/${filePath}/${photo.src}`} 
          alt={photo.alt} 
          className={`w-full h-full rounded-tr-lg rounded-br-lg ${photoStyle === 'contain' ? 'object-contain' : 'object-cover'} ${hideAnimation ? '' : 'transition-opacity duration-500 group-hover:opacity-75'}`}        
        />
        {photo.title || photo.description ? (
          <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="font-bold text-md">{photo.title}</h2>
            <p className="text-sm">{photo.description}</p>
          </div>
        ) : ''}
      </div>
    </div>
  );
}