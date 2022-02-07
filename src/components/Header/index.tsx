/** @format */

import { Componente } from './styles';

import marvelLogo from '../../assets/images/Marvel_Logo.svg';
import Image from 'next/image';
import { useMarvel } from '../../context/MarvelContext';

export default function Header() {
	const { setTypeList, typeList } = useMarvel();

	function setType(type: string) {
		switch (type) {
			case 'characters':
				setTypeList({
					characters: true,
					comics: false,
					series: false,
					stories: false,
				});
				break;
			case 'comics':
				setTypeList({
					characters: false,
					comics: true,
					series: false,
					stories: false,
				});
				break;
			case 'series':
				setTypeList({
					characters: false,
					comics: false,
					series: true,
					stories: false,
				});
				break;
			case 'stories':
				setTypeList({
					characters: false,
					comics: false,
					series: false,
					stories: true,
				});
				break;

			default:
				setTypeList({
					characters: true,
					comics: false,
					series: false,
					stories: false,
				});
				break;
		}
	}

	return (
		<Componente>
			<Image
				width='150px'
				height='70px'
				src={marvelLogo}
				alt='Logo da Marvel'
			/>

			<nav>
				<ul>
					<li
						className={typeList.characters ? 'selected' : ''}
						onClick={() => setType('characters')}>
						CHARACTERS
					</li>
					<li
						className={typeList.comics ? 'selected' : ''}
						onClick={() => setType('comics')}>
						COMICS
					</li>
					<li
						className={typeList.series ? 'selected' : ''}
						onClick={() => setType('series')}>
						SERIES
					</li>
					<li
						className={typeList.stories ? 'selected' : ''}
						onClick={() => setType('stories')}>
						STORIES
					</li>
				</ul>
			</nav>
		</Componente>
	);
}
