import { teamData } from '../data/teamData';
import Card from '../components/Card';

export default function Roster() {
  const team = teamData;
  return (
    <>
      <div className="sm:pt-12 md:pt-16 lg:pt-8 flex justify-center items-center flex-wrap">
        {team
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .map((member) => (
            member.isActive ? (
              <div key={member.id} className="p-4">
                <Card member={member} />
              </div>
            ) : ''
          ))}
      </div>
    </>
  );
}