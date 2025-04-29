import { teamData } from '../data/teamData';
import { FadeIn, FadeInStagger } from "~/components/FadeIn";

export default function RosterPage() {
  // Sort team members alphabetically by name
  const sortedTeamMembers = [...teamData].sort((a, b) => 
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <section className="py-16 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Team
            </h2>
            <div className="mt-3 h-1 w-20 bg-white rounded"></div>
          </div>
        </FadeIn>

        <FadeInStagger faster>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedTeamMembers.map((member) => (
              <FadeIn key={member.id}>
                <div className="group relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800">
                    <img
                      src={member.img ? `assets/headshots/${member.img}` : '/assets/logos/VP_logo_1.jpg'}
                      alt={member.firstName}
                      className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-primary transition">
                      {member.firstName} {member.lastName}
                    </h3>
                    {/* <p className="text-sm text-gray-400">
                      {member.category}
                    </p> */}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}