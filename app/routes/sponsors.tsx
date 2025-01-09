import { sponsorData } from '../data/sponsorData';
import PhotoContainer from '../components/PhotoContainer';
import { Sponsor } from '~/utils';
import { FadeIn } from '~/components/FadeIn';

export default function Sponsors() {
  const sponsors = sponsorData;
  const photos = sponsors
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((sponsor, index) => ({
      id: index,
      src: sponsor.img,
      alt: sponsor.name,
      title: sponsor.name,
      description: sponsor.description,
      newSponsor: sponsor.new,
    }));

  return (
    <>
      <div className="md:mt-12 sm:mt-16 lg:mt-2">
        <div className="flex w-full mx-auto">
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <FadeIn
            >
              <li key={photo.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">{photo.title}</h3>
                      {photo.newSponsor ? <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">New</span> : ''}
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">{photo.description}</p>
                  </div>
                  <img alt="" src={`/assets/logos/${photo.src}`} className="size-14 shrink-0 rounded-full bg-gray-300" />
                </div>
              </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}