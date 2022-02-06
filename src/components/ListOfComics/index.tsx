import Card from '../Card';

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

interface ListOfComicsType {
	results: CharacterType[];
}

export default function ListOfComics({ results }: ListOfComicsType) {
	return (
		<>
			{results?.map((character, i) => (
				<Card key={i} character={character} />
			))}
		</>
	);
}
