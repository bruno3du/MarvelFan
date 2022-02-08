/** @format */

import styled from 'styled-components';

export const Card = styled.div`
	min-width: 220px;
	max-width: 320px;
	border-radius: 0.625rem;
	border: 3px solid var(--white);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> div:first-of-type {
		flex: 1;
	}

	> div:last-of-type {
		padding: 2.5rem 1.562rem 1.25rem 1.562rem;
		width: 100%;
		margin-top: -50px;
		z-index: 100;
		background-image: linear-gradient(0deg, var(--black-700) 85%, transparent);
		display: flex;
		flex-direction: column;

		h4 {
			margin-top: 0.625rem;
			text-align: center;
			color: var(--white);
			padding-top: 20px;
		}

		p {
			margin-top: 1.187rem;
			font-size: 0.875rem;
		}

		span {
			display: inline-block;
			font-weight: 700;
			font-size: 0.875rem;
			margin: 1.187rem 0 0.8rem 0;
			
		}

		button {
			padding: 7px 1.25rem;
			border: 2px solid var(--white);
			border-radius: 5px;
			align-self: flex-end;
			font-size: 0.875rem;
			display: flex;
			gap: 0.937rem;
			align-items: center;
			font-weight: 700;
			color: var(--white);
		}
	}
`;
