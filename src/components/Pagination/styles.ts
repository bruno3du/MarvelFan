/** @format */

import styled from 'styled-components';

export const Container = styled.ul`
	width: 90%;
	margin: 0 auto;
	margin-top: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	font-family: 'Poppins', sans-sarif;
	gap: 0.625rem;

	@media (max-width: 480px) {
		gap: 0.425rem;
		margin-top: 60px;
	}

	li {
		display: flex;
		align-items: center;

		.btn-prev-next {
			display: flex;
			gap: 0.625rem;
			font-weight: 600;
			background: var(--gray-400);
			color: var(--black-600);
			padding: 8px 1rem;
			align-items: center;
			border-radius: 3px;

			@media (max-width: 480px) {
				gap: 0.425rem;
				padding: 6px 0.7rem;
			}

			&:disabled {
				background: var(--gray-700);
				color: var(--gray-400);
				cursor: default;
			}
		}

		.btn {
			font-weight: 600;
			width: 2rem;
			height: 2rem;
			border-radius: 3px;
			color: var(--black-600);
			background: var(--gray-400);
		}
		.pagination__item--active {
			background: var(--red-650);
			color: var(--color-white);
		}
	}
`;
