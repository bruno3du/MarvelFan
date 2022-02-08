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

interface ListOfComicsType {
	results: CharacterType[];
}

export default function ListOfComics({ results }: ListOfComicsType) {

	return (
		<>
			{results?.map((character) => {
				const image = `${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`;

				function setDescription(des: string) {
					if (des?.length >= 50) {
						const description = character.description.substring(0, 100) + '...';
						return description;
					}
					return des ?? '';
				}
				return (
					<Card key={character.id}>
						<div>
							<Image
								src={image}
								alt={character.title}
								width='500px'
								height='300px'
							/>
						</div>
						<div>
							<h4>{character.title}</h4>
							<p>
								{character.description && setDescription(character.description)}
							</p>
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
