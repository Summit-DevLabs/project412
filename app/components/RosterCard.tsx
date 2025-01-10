import { Link } from '@remix-run/react';
import { RosterCardProps } from '~/utils';

export default function RosterCard({ member, sponsor } : RosterCardProps) {
  return (
    <>
      {member ? <div className="w-80 h-80 p-4 my-4">
        <a href="#" className="group relative block bg-black rounded-xxl">
          <img
            alt="Headshot"
            src={`./assets/headshots/${member.img}`}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative sm:p-6 lg:p-8">
            <div className="absolute bottom-16 left-4">
              <p className="text-xl font-bold text-white sm:text-2xl">{member.firstName} {member.lastName}</p>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Category {member.category}</p>
            </div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                  short bio?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div> : ''}

      {sponsor ? <div className="w-80 h-80 p-4 my-4">
        <Link to={sponsor.url} className="group relative block bg-black rounded-lg">
          <img
            alt="Headshot"
            src={`./assets/logos/${sponsor.img}`}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative sm:p-6 lg:p-8">
            <div className="absolute bottom-16 left-4">
              <p className="text-xl font-bold text-white sm:text-2xl">{sponsor.name}</p>
              
            </div>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div
                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-sm text-white">
                  Visit
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div> : ''}
    </>
  );
}