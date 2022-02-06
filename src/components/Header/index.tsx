/** @format */

import { Componente } from './styles';

import marvelLogo from '../../assets/images/Marvel_Logo.svg';
import Image from 'next/image';
import { ActiveLink } from '../ActiveLink';

export default function Index() {
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
					<ActiveLink activeClassName='selected' href='/'>
						<li>CHARACTERS</li>
					</ActiveLink>
					<ActiveLink activeClassName='selected' href='/comic'>
						<li>COMICS</li>
					</ActiveLink>
					<ActiveLink activeClassName='selected' href='/series'>
						<li>SERIES</li>
					</ActiveLink>
					<ActiveLink activeClassName='selected' href='/stories'>
						<li>STORIES</li>
					</ActiveLink>
				</ul>
			</nav>
		</Componente>
	);
}
