/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import BasicLayout from '../styles/GlobalStyle';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<BasicLayout>
			<Head>
				<title>Marvel</title>
			</Head>
			<Header />
		</BasicLayout>
	);
};

export default Home;
