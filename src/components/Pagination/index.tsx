/** @format */

import { Container } from './styles';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
	limit: number;
	total: number;
	offset: number;
	setOffset: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
	limit,
	total,
	offset,
	setOffset,
}: PaginationProps) {
	const MAX_ITEMS = 5;
	const MAX_LEFT = (MAX_ITEMS - 1) / 2;
	const LIMITE = 9;

	const pages = Math.ceil(total / limit); // Quantidade de página
	let current = offset ? offset / limit + 1 : 1;
	const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
	const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

	function onPageChange(page: number) {
		setOffset((page - 1) * LIMITE);
	}

	return (
		<Container className='pagination'>
			<li>
				<button
					className='btn-prev-next'
					onClick={() => onPageChange(current - 1)}
					disabled={current === 1}>
					<FiArrowLeftCircle />
					<span>PREVIOUS</span>
				</button>
			</li>
			{Array.from({ length: Math.min(MAX_ITEMS, pages) })
				.map((_, index) => index + first)
				.map((page) => (
					<li key={page}>
						<button
							onClick={() => onPageChange(page)}
							className={
								page === current ? 'pagination__item--active btn' : 'btn'
							}>
							{page}
						</button>
					</li>
				))}
			<li>
				<button
					onClick={() => onPageChange(current + 1)}
					disabled={current === pages}
					className='btn-prev-next'>
					NEXT
					<FiArrowRightCircle />
				</button>
			</li>
		</Container>
	);
}
