/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import GlobalStyle from '../styles/GlobalStyle';
import { Container, ListOfCard } from '../styles/HomeStyled';

const Home: NextPage = () => {
	return (
		<GlobalStyle>
			<Head>
				<title>Marvel</title>
			</Head>

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
				<Pagination limit={5} current={1} offset={0} total={20} />
			</Container>
		</GlobalStyle>
	);
};

export default Home;
