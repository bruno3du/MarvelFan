/** @format */

import type { AppProps } from 'next/app';
import Header from '../components/Header';
import MarvelProvider from '../context/MarvelContext';
import './_app.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<MarvelProvider>
				<Header />
				<Component {...pageProps} />
			</MarvelProvider>
		</>
	);
}

export default MyApp;
