export default function HeroSection() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[2000px] mx-auto relative">
        <div className="aspect-[16/9] md:aspect-[21/9] w-full">
          <img
            src="/assets/logos/VP_logo_1.jpg"  
            alt="Hero Logo"
            className="w-full h-full object-contain"  // object-contain will preserve aspect ratio
          />
        </div>
      </div>
    </div>
  );
} 