/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import Search from '../components/Search';
import BasicLayout from '../styles/GlobalStyle';
import { Container, ListOfCard } from '../styles/Home';

const Home: NextPage = () => {
	return (
		<>
			<BasicLayout>
				<Head>
					<title>Marvel</title>
				</Head>
			</BasicLayout>

			<Container>
				<div>
					<h1>CHARACTERS</h1>
					<Search placeholder='Search' />
				</div>
				<hr />
				<ListOfCard>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</ListOfCard>
			</Container>
		</>
	);
};

export default Home;
