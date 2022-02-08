/** @format */

import Image from 'next/image';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Card } from './styles';

interface CharacterType {
	id: number;
	title?: string;
	name?: string;
	description: string;
	modified: Date;
	thumbnail: {
		path: string;
		extension: string;
	};
}

interface ListOfStoriesType {
	results: CharacterType[];
}

export default function ListOfStories({ results }: ListOfStoriesType) {

	return (
		<>
			{results?.map((character) => {
				return (
					<Card key={character.id}>
						<div>
							<h4>{character.title}</h4>

							<span>MODIFIED: {character.modified}</span>
							<button>
								MORE <BsArrowRightCircleFill />
							</button>
						</div>
					</Card>
				);
			})}
		</>
	);
}
