/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1180px;
	margin: 50px auto;

	> div {
		display: flex;
		gap: 70px;
		overflow: hidden;
	}
`;

export const Card = styled.div`
	min-width: 239px;
	height: 304px;
	border-radius: 5px;
	overflow: hidden;
	position: relative;

	.card-shadow {
		position: absolute;
		background: linear-gradient(0deg, #000000 0%, rgba(32, 32, 32, 0) 100%);
		z-index: 100;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column-reverse;
		align-items: center;

		h4 {
			margin-bottom: 22px;
		}
	}
`;
