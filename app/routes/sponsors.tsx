import { sponsorData } from '../data/sponsorData';
import PhotoContainer from '../components/PhotoContainer';

export default function Sponsors() {
  const sponsors = sponsorData;
  const photos = sponsors
    .sort((a, b) => a.name.localeCompare(b.name))
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
        <div className="flex w-full mx-auto">
          <PhotoContainer layout="grid" photos={photos} size="medium" filePath="logos" photoStyle="contain"/>
        </div>
      </div>
    </>
  );
}