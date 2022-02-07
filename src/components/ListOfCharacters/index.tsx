/** @format */

import Image from 'next/image';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Card } from './styles';

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

interface ListOfCharactersType {
	results: CharacterType[];
}

export default function ListOfCharacters({ results }: ListOfCharactersType) {
	return (
		<>
			{results?.map((character) => {
				const image = `${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`;

				function setDescription(des: string) {
					if (des.length >= 50) {
						const description = character.description.substring(0, 100) + '...';
						return description;
					}
					return des;
				}
				return (
					<Card key={character.id}>
						<div>
							<Image
								src={image}
								alt={character.name}
								width='500px'
								height='300px'
							/>
						</div>
						<div>
							<h4>{character.name}</h4>
							<p>{setDescription(character.description)}</p>
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
