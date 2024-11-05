import PhotoContainer from "~/components/PhotoContainer";
import { mediaPagePhotos } from "~/data/photoData"

export default function Media() {
  const photos = mediaPagePhotos.reverse();
  return (
    <>
      <div className="md:mt-12 sm:mt-16 lg:mt-2">
        <PhotoContainer photos={photos} layout="grid" size="medium" filePath="media" photoStyle="cover"/>
      </div>
    </>
  )
}