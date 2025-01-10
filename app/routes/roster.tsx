import { teamData } from '../data/teamData';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';

export default function Roster() {
  const team = teamData;
  return (
    <>
      <div className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInStagger>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
            >
              {team
                .sort((a, b) => a.lastName.localeCompare(b.lastName))
                .map((member) => (

                  <FadeIn>
                    <li key={member.id} className="flex flex-col gap-6 xl:flex-row">
                      <img alt={member.firstName} src={`assets/headshots/${member.img}`} className="aspect-[4/5] w-52 flex-none rounded-2xl object-fill" />
                      <div className="flex-auto">
                        <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">{member.firstName} {member.lastName}</h3>
                      </div>
                    </li>
                  </FadeIn>
                ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>

      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((member) => (
              <li key={member.firstName}>
                <img alt="" src={`assets/headshots/${member.img}`} className="mx-auto size-56 rounded-full" />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{member.firstName}</h3>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}