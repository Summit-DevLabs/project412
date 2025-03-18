import { sponsorData } from '../data/sponsorData';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';

export default function Sponsors() {
  const sponsors = sponsorData;

  return (
    <>
      <div className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInStagger>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
            >
              {sponsors.map((sponsor) => (
                <FadeIn>
                  <li key={sponsor.name} className="flex flex-col gap-6 xl:flex-row">
                    <img alt={sponsor.name} src={`assets/logos/${sponsor.img}`} className="aspect-[5/4] w-52 flex-none rounded-2xl object-contain bg-white" />
                    <div className="flex-auto">
                      <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{sponsor.name}</h3>
                      <p className="mt-6 text-base/7 text-gray-600">{sponsor.description}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>
    </>
  );
}