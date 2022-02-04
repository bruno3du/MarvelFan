/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	max-width: 300px;

	div {
		color: black;
		position: absolute;
		top: 20%;
		right: 0.625rem;
		width: 1.562rem;
		height: 1.562rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	input {
		width: 100%;
		color: var(--black-700);
		border-radius: 0.625rem;
		font-size: 1rem;
		padding: 0.625rem 0.875rem;
		font-family: Roboto;

		&::placeholder {
			font-size: 1rem;
		}

		@media (max-width: 690px) {
			border-radius: 0.525rem;
		}
	}
`;
