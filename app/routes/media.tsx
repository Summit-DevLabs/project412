import { mediaPagePhotos } from "~/data/photoData"
import { FadeIn, FadeInStagger } from "~/components/FadeIn"

export default function Media() {
	const photos = mediaPagePhotos.reverse();

	return (
		<FadeInStagger>
			<div className="px-4 sm:px-6 md:px-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mx-auto space-y-4">
				{photos.map((photo, index) => (
					<FadeIn key={index}>
						<div className="break-inside-avoid">
							<img
								src={`assets/media/${photo.src}`}
								alt={photo.alt}
								className="w-full rounded-lg"
								loading="lazy"
							/>
						</div>
					</FadeIn>
				))}
			</div>
		</FadeInStagger>
	)
}