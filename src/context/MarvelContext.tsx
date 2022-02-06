/** @format */

import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react';
import { apiMarvel } from '../services/api';
import MD5 from 'crypto-js/md5';
import { formatDate } from '../utils/formatDate';

interface CharacterType {
	id: number;
	name: string;
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

	getAllCharacters: (type?: string, offset?: number) => void;
}

export const MarvelContext = createContext({} as MarvelContexttype);

export default function MarvelProvider({ children }: { children: ReactNode }) {
	const apiKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC;
	const apiKeyPrivate = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE;
	const LIMITE = 9;
	const [loading, setLoading] = useState(false);
	const [allCharacters, setAllCharacters] = useState({} as AllCharactersType);

	const getAllCharacters = useCallback(
		(type: string = 'characters', offset: number = 0) => {
			setLoading(true);
			const timestamp = new Date().getTime();
			const hash = MD5(timestamp + apiKeyPrivate! + apiKey!).toString();
			apiMarvel
				.get(
					`${type}?limit=${LIMITE}&offset=${offset}&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
				)
				.then((res) => {
					const data = res.data.data;
					console.log(res)
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

	return (
		<MarvelContext.Provider
			value={{ loading, allCharacters, getAllCharacters }}>
			{children}
		</MarvelContext.Provider>
	);
}

export const useMarvel = () => {
	const { allCharacters, getAllCharacters, loading } =
		useContext(MarvelContext);

	return { allCharacters, getAllCharacters, loading };
};
