/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import ListOfCharacters from '../components/ListOfCharacters';
import ListOfComics from '../components/ListOfComics';
import ListOfSeries from '../components/ListOfSeries';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { useMarvel } from '../context/MarvelContext';
import ListOfStories from '../components/ListOfStories';
import GlobalStyle from '../styles/GlobalStyle';
import { Container, ListOfCard } from '../styles/HomeStyled';
import LoadingState from '../components/LoadingState';

const Home: NextPage = () => {
	const {
		getAllCharacters,
		getAllComics,
		getAllSeries,
		getAllStories,
		allCharacters,
		typeList,
		loading,
		offset,
		setOffset,
	} = useMarvel();

	const handlePagination = useCallback(() => {
		if (typeList.comics) {
			return getAllComics(offset);
		} else if (typeList.series) {
			return getAllSeries(offset);
		} else if (typeList.stories) {
			return getAllStories(offset);
		} else {
			return getAllCharacters(offset);
		}
		// eslint-disable-next-line
	}, [offset, typeList.comics, typeList.series, typeList.stories]);

	useEffect(() => {
		handlePagination();
		// eslint-disable-next-line
	}, [offset]);

	const handleTitle = () => {
		if (typeList.comics) {
			return 'COMICS';
		} else if (typeList.series) {
			return 'SERIES';
		} else if (typeList.stories) {
			return 'STORIES';
		} else {
			return 'CHARACTERS';
		}
	};

	return (
		<GlobalStyle>
			<Head>
				<title>Marvel</title>
			</Head>

			<Container>
				<div>
					<h1>{handleTitle()}</h1>
					<Search placeholder='Search' />
				</div>
				<hr />
				{loading ? (
					<LoadingState />
				) : (
					<ListOfCard>
						{typeList.characters && (
							<ListOfCharacters results={allCharacters.results} />
						)}
						{typeList.comics && (
							<ListOfComics results={allCharacters.results} />
						)}
						{typeList.series && (
							<ListOfSeries results={allCharacters.results} />
						)}
						{typeList.stories && (
							<ListOfStories results={allCharacters.results} />
						)}
					</ListOfCard>
				)}
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
