import { raceData } from '../data/raceData';
import RaceCard from '../components/RaceCard';
import { format } from 'path';

export default function Races() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set the time to 00:00:00 for accurate comparison

  const formattedRaces = raceData.map((race) => {
    const parts = race.date.split(' ');
    const days = parts[0].split('-');
    const month = parts[1];
    const formattedDate = days.length > 1 ? `${month} ${days[0]}-${days[1]}` : `${month} ${days[0]}`;
    const raceDate = new Date(Date.parse(`${month} ${days[0]}, ${new Date().getFullYear()}`)); // Use only the first day in the range
    const isFuture = raceDate > today;

    return { ...race, date: formattedDate, isFuture, raceDate };
  }).sort((a, b) => a.raceDate.getTime() - b.raceDate.getTime()); // Convert the dates to timestamps before subtracting them
  const races = formattedRaces;

  return (
    <>
      <div className="px-4 gradient-bg">
        <h1 className="text-2xl font-bold mb-4 sm:pt-16 md:pt-16 flex justify-center items-center">Upcoming Races</h1>
        {races.length === 0 ? (
          <h1>More race events coming soon!</h1>
        ) : (
          <div className="flex flex-wrap justify-center items-center">
            {races.map((race) => (
              <div key={race.raceName} className="flex justify-center items-center m-2 w-full md:w-[40%] lg:w-[40%] xl:w-[30%]">
                <RaceCard race={race} isFuture={race.isFuture}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

