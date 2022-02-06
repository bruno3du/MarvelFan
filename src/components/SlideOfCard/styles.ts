/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1180px;
	margin: 50px auto;
	position: relative;

	&:hover {
		.arrowLeft {
			cursor: pointer;
			background: linear-gradient(
				90deg,
				#151515 -14.88%,
				rgba(21, 21, 21, 0.05) 75%
			);

			.iconLeft {
				color: white;
			}
		}
	}

	&:hover {
		.arrowRight {
			cursor: pointer;
			background: linear-gradient(
				270deg,
				#151515 -14.88%,
				rgba(21, 21, 21, 0.05) 75%
			);

			.iconRight {
				color: white;
			}
		}
	}

	.arrowLeft {
		position: absolute;
		top: -15px;
		left: 0px;
		z-index: 200;
		width: 120px;
		height: 334px;

		.iconLeft {
			width: 30px;
			height: 30px;
			margin-left: 5px;
			color: transparent;
		}

		display: flex;
		align-items: center;
		padding-right: 10px;
	}

	.arrowRight {
		position: absolute;
		width: 120px;
		height: 334px;
		z-index: 200;
		top: -15px;
		right: 0;

		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 10px;

		.iconRight {
	
			width: 30px;
			height: 30px;
			color: transparent;
		}
	}

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
