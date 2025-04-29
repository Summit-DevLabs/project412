import { mediaPagePhotos } from "~/data/photoData"
import { FadeIn, FadeInStagger } from "~/components/FadeIn"

export default function Media() {

	return (
		<FadeInStagger>
			<div className="px-4 sm:px-6 md:px-8 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 mx-auto space-y-4">
				{[...mediaPagePhotos].reverse().map((photo, index) => (
					<FadeIn key={index}>
						<div className="break-inside-avoid group relative">
							<img
								src={`assets/media/${photo.src}`}
								alt={photo.alt}
								className="w-full rounded-lg"
								loading="lazy"
							/>
							{photo.credit && (
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-start p-4">
									<p className="text-white text-sm">
										Credit: {photo.credit}
									</p>
								</div>
							)}
						</div>
					</FadeIn>
				))}
			</div>
		</FadeInStagger>
	)
}