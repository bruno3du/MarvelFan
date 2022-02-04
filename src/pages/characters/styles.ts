/** @format */

import styled from 'styled-components';

export const Container = styled.main`
	width: 90%;
	max-width: 1300px;
	margin: 0 auto;
	margin-top: 60px;

	> h1 {
		@media (max-width: 670px) {
			text-align: center;
		}
	}

	> hr {
		margin: 10px 0 2.5rem 0;
		width: 50%;
		border: 2px solid var(--red-700);
		border-radius: 0.625rem;

		@media (max-width: 670px) {
			width: 90%;
			margin: 20px auto 20px auto;
		}
	}

	.character-name {
		background: var(--black-700);
		border-radius: 4px 4px 0 0;
		border-bottom: 2px solid rgba(0, 0, 0, 0.4);

		padding: 15px;
		text-align: center;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	}

	.character-thumbnail {
		width: 100%;
		background: var(--black-700);
		margin-bottom: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 4px solid #030303;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
	}
	.character-firstContainer {
		flex: 1;
		height: 300px;
		z-index: 100;
		margin-right: -50px;
		width: calc(100% + 50px);
		background-image: linear-gradient(
			90deg,
			var(--black-700) 90.6%,
			rgba(32, 32, 32, 0.2)
		);
	}

	.character-secondContainer {
		flex: 1;
		height: 300px;
		z-index: 100;
		width: calc(100% + 50px);
		margin-left: -50px;
		background-image: linear-gradient(
			270deg,
			var(--black-700) 90.6%,
			rgba(32, 32, 32, 0.2)
		);
	}
`;
