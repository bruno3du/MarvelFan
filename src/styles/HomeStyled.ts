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

		@media (max-width: 670px) {
			flex-direction: column;
			justify-content: center;

			h1 {
				margin-bottom: 20px;
			}
		}
	}

	hr {
		margin: 3px 0 2.5rem 0;
		width: 50%;
		border: 2px solid var(--red-700);
		border-radius: 0.625rem;

		@media (max-width: 670px) {
			width: 90%;
			margin: 20px auto 20px auto;
		}
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
