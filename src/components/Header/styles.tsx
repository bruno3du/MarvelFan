/** @format */

import styled from 'styled-components';

export const Componente = styled.header`
	width: calc(100% - 1.875rem);
	max-width: 1300px;
	margin: 0 auto;
	color: var(--white);

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 3.125rem;
	gap: 1.875rem;
	flex-wrap: wrap;

	@media (max-width: 590px) {
		justify-content: center;
	};

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
				font-size: 0.875rem;
				cursor: pointer;

				& + li {
					margin-left: 1.875rem;
				}
			}
		}
	}
`;
