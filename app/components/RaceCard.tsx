import { Race } from '~/utils';

export default function RaceCard({ race, isFuture }: { race: Race, isFuture: boolean}) {
	const today = new Date();
	
	return (
		<div className={`bg-gray-100 p-4 rounded-md mb-4 w-[70%] ${isFuture ? 'bg-white': 'bg-gray-400'}`} >
			<strong className="">{race.raceName}</strong>
			<p className={`${!isFuture ? 'line-through' : ''}`}>{race.date}</p>
			<p>{race.location}</p>
			<p>Type: {race.type}</p>
		</div>
	);
};
