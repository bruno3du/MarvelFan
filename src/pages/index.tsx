/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import ListOfCharacters from '../components/ListOfCharacters';
import ListOfComics from '../components/ListOfComics';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { useMarvel } from '../context/MarvelContext';
import GlobalStyle from '../styles/GlobalStyle';
import { Container, ListOfCard } from '../styles/HomeStyled';

const Home: NextPage = () => {
	const { getAllCharacters, allCharacters, typeList } = useMarvel();
	const [offset, setOffset] = useState(0);


	const handlePagination = useCallback(() => {
		getAllCharacters(offset);
	}, [offset, getAllCharacters]);

	useEffect(() => {
		handlePagination();
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
					{typeList.characters && (
						<ListOfCharacters results={allCharacters.results} />
					)}
					{typeList.comics && <ListOfComics results={allCharacters.results} />}
					{typeList.series && <h1>series</h1>}
					{typeList.stories && <h1>stories</h1>}
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
