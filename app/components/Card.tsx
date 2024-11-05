import { RosterCardProps } from '~/utils';

export default function Card({ member }: RosterCardProps) {
	return (
		<>
			{member.img === '' ? (
				<div className="relative block h-96 min-h-full w-72 rounded-lg bg-black">
					<div className="absolute bottom-8 left-4">
						<p className="text-xl font-bold text-white sm:text-2xl">
							{member.firstName} {member.lastName}
						</p>
						{/* <p className="text-primary text-sm font-medium uppercase tracking-widest">Category {member.category}</p> */}
					</div>
				</div>
			) : (
				<div className="relative block h-96 w-72 rounded-lg bg-black">
					<img
						alt="Headshot"
						src={`./assets/headshots/${member.img}`}
						className="h-full w-full rounded-lg object-cover"
					/>
					<div className="absolute bottom-8 rounded-br-lg rounded-tr-lg bg-black">
						<div className="px-2 py-1">
							<p className="text-xl font-bold text-white sm:text-2xl">
								{member.firstName} {member.lastName}
							</p>
							{/* <p className="text-primary text-sm font-medium uppercase tracking-widest">Category {member.category}</p> */}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
