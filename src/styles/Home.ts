/** @format */

import styled from 'styled-components';

export const Container = styled.main`
	width: 95%;
	max-width: 1280px;
	margin: 4.375rem auto;

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	hr {
		margin-top: 3px;
		width: 50%;
		border: 2px solid var(--red-700);
		margin-bottom: 2.5rem;
		border-radius: 0.625rem;
	}
`;

export const ListOfCard = styled.section`
	width: 90%;
	margin: 0 auto;
	display: grid;
	margin-bottom: 1.875rem;
	grid-template-columns: minmax(14rem, 1fr) minmax(14rem, 1fr) minmax(
			14rem,
			1fr
		);
	grid-auto-flow: row;
	grid-gap: 2.5rem;
	place-items: center;

	@media (max-width: 890px) {
		grid-template-columns: minmax(14rem, 1fr) minmax(14rem, 1fr);
	}

	@media (max-width: 590px) {
		grid-template-columns: minmax(14rem, 1fr);
	}
`;
