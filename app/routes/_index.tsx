import PhotoContainer from "~/components/PhotoContainer";
import { landingPagePhotos } from "~/data/photoData";
import { sponsorData } from "~/data/sponsorData";
import NewsSection from "~/components/NewsSection";

export default function Index() {
  const photos = landingPagePhotos;
  const sponsors = sponsorData;
  const sponsorPhotos = sponsors
    .map((sponsor, index) => ({
      id: index,
      src: sponsor.img,
      alt: sponsor.name,
      title: sponsor.name,
      description: sponsor.description
    }));

  return (
    <>
      <div className="md:mt-12 sm:mt-16 lg:mt-2">
        {/* <div style={{ position: 'relative', height: 0, paddingBottom: '60%', overflow: 'hidden', maxWidth: '100%' }}>
          <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} frameBorder='0' allowTransparency={true} scrolling='no' src='https://www.road-results.com/widget.php?teamid=68749&w=1400&h=240&dark=1&speed=5' ></iframe>
        </div> */}
        <div className="flex flex-col justify-center items-center">
          <PhotoContainer layout="col" photos={photos} size="large" filePath="media" photoStyle="cover" hideAnimation={true} />
          <p className="text-white text-2xl py-12 px-4 lg:py-24 lg:px-24 text-center">Project 412 is focused on competition, philanthropic efforts and community engagement. We are dedicated to promoting the sport of cycling and inspiring the next generation, regardless of background, financial means or experience level.
            Come ride with us!
          </p>

          <NewsSection />
        </div>

      </div>
      <PhotoContainer layout="row" photos={sponsorPhotos} size="medium" filePath="logos" photoStyle="contain" />
    </>
  );
}