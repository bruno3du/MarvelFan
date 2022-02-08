/** @format */

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useCallback,
	useContext,
	useState,
} from 'react';
import { apiMarvel } from '../services/api';
import MD5 from 'crypto-js/md5';
import { formatDate } from '../utils/formatDate';

interface CharacterType {
	id: number;
	name?: string;
	title?: string;
	description: string;
	modified: Date;
	thumbnail: {
		path: string;
		extension: string;
	};
}

interface AllCharactersType {
	count: number;
	limit: number;
	offset: number;
	total: number;
	results: CharacterType[];
}

interface MarvelContexttype {
	allCharacters: AllCharactersType;
	loading: boolean;
	getAllComics: (offset?: number) => void;
	getAllCharacters: (offset?: number) => void;
	getAllSeries: (offset?: number) => void;
	getAllStories: (offset?: number) => void;
	typeList: {
		characters: boolean;
		comics: boolean;
		series: boolean;
		stories: boolean;
	};
	setTypeList: Dispatch<
		SetStateAction<{
			characters: boolean;
			comics: boolean;
			series: boolean;
			stories: boolean;
		}>
	>;
}

export const MarvelContext = createContext({} as MarvelContexttype);

export default function MarvelProvider({ children }: { children: ReactNode }) {
	const apiKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC;
	const apiKeyPrivate = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE;
	const LIMITE = 9;
	const [loading, setLoading] = useState(false);
	const [allCharacters, setAllCharacters] = useState({} as AllCharactersType);
	const [typeList, setTypeList] = useState({
		characters: true,
		comics: false,
		series: false,
		stories: false,
	});

	const getAllCharacters = useCallback(
		(offset: number = 0) => {
			setLoading(true);
			const timestamp = new Date().getTime();
			const hash = MD5(timestamp + apiKeyPrivate! + apiKey!).toString();
			apiMarvel
				.get(
					`characters?limit=${LIMITE}&offset=${offset}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
				)
				.then((res) => {
					const data = res.data.data;

					setAllCharacters({
						count: data.count,
						limit: data.limit,
						offset: data.offset,
						total: data.total,
						results: data.results.map((ele: CharacterType) => {
							const newDate = formatDate(ele.modified);

							return {
								id: ele.id,
								name: ele.name,
								description: ele.description,
								modified: newDate,
								thumbnail: ele.thumbnail,
							};
						}),
					});
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setLoading(false));
		},
		[apiKey, apiKeyPrivate]
	);

	const getAllSeries = useCallback(
		(offset: number = 0) => {
			setLoading(true);
			const timestamp = new Date().getTime();
			const hash = MD5(timestamp + apiKeyPrivate! + apiKey!).toString();
			apiMarvel
				.get(
					`series?limit=${LIMITE}&offset=${offset}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
				)
				.then((res) => {
					const data = res.data.data;

					setAllCharacters({
						count: data.count,
						limit: data.limit,
						offset: data.offset,
						total: data.total,
						results: data.results.map((ele: CharacterType) => {
							const newDate = formatDate(ele.modified);

							return {
								id: ele.id,
								name: ele.name,
								description: ele.description,
								modified: newDate,
								thumbnail: ele.thumbnail,
							};
						}),
					});
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setLoading(false));
		},
		[apiKey, apiKeyPrivate]
	);

	const getAllComics = useCallback(
		(offset: number = 0) => {
			setLoading(true);
			const timestamp = new Date().getTime();
			const hash = MD5(timestamp + apiKeyPrivate! + apiKey!).toString();
			apiMarvel
				.get(
					`comics?limit=${LIMITE}&offset=${offset}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
				)
				.then((res) => {
					const data = res.data.data;

					setAllCharacters({
						count: data.count,
						limit: data.limit,
						offset: data.offset,
						total: data.total,
						results: data.results.map((ele: CharacterType) => {
							const newDate = formatDate(ele.modified);
					
							return {
								id: ele.id,
								title: ele.title,
								description: ele.description,
								modified: newDate,
								thumbnail: ele.thumbnail,
							};
						}),
					});
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setLoading(false));
		},
		[apiKey, apiKeyPrivate]
	);

	const getAllStories = useCallback(
		(offset: number = 0) => {
			setLoading(true);
			const timestamp = new Date().getTime();
			const hash = MD5(timestamp + apiKeyPrivate! + apiKey!).toString();
			apiMarvel
				.get(
					`stories?limit=${LIMITE}&offset=${offset}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
				)
				.then((res) => {
					const data = res.data.data;

					setAllCharacters({
						count: data.count,
						limit: data.limit,
						offset: data.offset,
						total: data.total,
						results: data.results.map((ele: CharacterType) => {
							const newDate = formatDate(ele.modified);
					
							return {
								id: ele.id,
								title: ele.title,
								description: ele.description,
								modified: newDate,
								thumbnail: ele.thumbnail,
							};
						}),
					});
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => setLoading(false));
		},
		[apiKey, apiKeyPrivate]
	);


	return (
		<MarvelContext.Provider
			value={{
				loading,
				allCharacters,
				getAllCharacters,
				getAllComics,
				getAllSeries,
				getAllStories,
				typeList,
				setTypeList,
			}}>
			{children}
		</MarvelContext.Provider>
	);
}

export const useMarvel = () => {
	const {
		allCharacters,
		loading,
		getAllCharacters,
		getAllSeries,
		getAllComics,
		getAllStories,
		typeList,
		setTypeList,
	} = useContext(MarvelContext);

	return {
		allCharacters,
		getAllCharacters,
		getAllComics,
		getAllSeries,
		getAllStories,
		loading,
		typeList,
		setTypeList,
	};
};
