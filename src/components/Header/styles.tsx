/** @format */

import styled from 'styled-components';

export const Componente = styled.header`
	width: 90%;
	max-width: 1300px;
	background-color: var(--black-700);
	border: 3px solid black;
	margin: 0 auto;
	margin-top: 34px;
	color: var(--white);

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 50px;
	gap: 30px;
	flex-wrap: wrap;

	.selected {
		color: #9c9b9b;
		border-bottom: 3px solid #e62429;
	}

	nav {
		ul {
			list-style: none;
			display: flex;
			li {
				font-weight: 600;
				cursor: pointer;

				& + li {
					margin-left: 30px;
				}
			}
		}
	}
`;
