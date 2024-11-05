import { Links, Meta, Outlet, Scripts, LiveReload, ScrollRestoration } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';
import Header from './components/Header';
import ComingSoon from './routes/coming-soon';
import Footer from './components/Footer';

import styles from './tailwind.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
	const underMaintenance = false; // Set to false when ready to launch
	if (underMaintenance) {
		return (
			<div>
				<div className="from-primary w-full bg-gradient-to-b to-black">
					<ComingSoon />
				</div>
				<Links />
			</div>
		);
	}

	return (
		<html>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/logos/p412.png" />
				<title>Project 412 Cycling</title>
				<Meta />
				<Links />
			</head>
			<body className="from-primary flex min-h-screen flex-col bg-gradient-to-b to-black">
				<Header />
				<div className="w-full flex-grow pb-32 pt-32">
					<div className="mx-auto max-w-screen-2xl">
						<Outlet />
					</div>
				</div>
				<div className="mt-auto">
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
