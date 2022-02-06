/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import ListOfCharacters from '../components/ListOfCharacters';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { useMarvel } from '../context/MarvelContext';
import GlobalStyle from '../styles/GlobalStyle';
import { Container, ListOfCard } from '../styles/HomeStyled';

const Home: NextPage = () => {
	const { getAllCharacters, allCharacters } = useMarvel();
	const [offset, setOffset] = useState(0);

	const handlePagination = useCallback(
		(type: string) => {
			getAllCharacters(type, offset);
		},
		[offset, getAllCharacters]
	);

	useEffect(() => {
		handlePagination('characters');
	}, [handlePagination]);

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
					{true && <ListOfCharacters results={allCharacters.results} />}
				</ListOfCard>
				<Pagination
					setOffset={setOffset}
					limit={allCharacters.limit}
					total={allCharacters.total}
					offset={allCharacters.offset}
				/>
			</Container>
		</GlobalStyle>
	);
};

export default Home;
