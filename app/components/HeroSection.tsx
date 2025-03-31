export default function HeroSection() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[2000px] mx-auto relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 aspect-[16/9] md:aspect-[16/12]">
            <img
              src="/assets/logos/VP_logo_1.jpg"
              alt="Hero Logo"
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="w-full md:w-1/2 aspect-[16/9] md:aspect-[16/12]">
            <img
              src="/assets/media/BryanPark2025_Dan.jpg"
              alt="Bryan Park 2025"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 