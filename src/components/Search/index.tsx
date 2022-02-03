/** @format */

import { InputHTMLAttributes, useState } from 'react';
import { Container } from './style';
import { FaSearch } from 'react-icons/fa';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	handleSearchBy?: (value: string) => Promise<void>;
};

export default function Search({ handleSearchBy, ...props }: InputProps) {
	const [value, setValue] = useState('');

	return (
		<Container>
			<input
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div >
				<FaSearch />
			</div>
		</Container>
	);
}
