import PhotoContainer from "~/components/PhotoContainer";
import { sponsorData } from "~/data/sponsorData";

export default function ComingSoon() {
  const photos = sponsorData
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((sponsor, index) => ({ id: index, src: sponsor.img, }));

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen text-center text-white">
        <div className="items-center justify-center pt-24">
          <h1 className="text-6xl font-bold uppercase">P412 Cycling site coming soon!</h1>
        </div>
        <div className="w-full mx-auto">
          <PhotoContainer layout="row" photos={photos} size="medium" filePath="logos" photoStyle="contain" />
        </div>
      </div>
    </>
  );
}