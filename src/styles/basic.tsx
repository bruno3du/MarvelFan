/** @format */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --black-700: #151515;
  --black-600: #202020;
  --gray-700: #484747;
  --gray-500: #9C9B9B
  --gray-400: #C4C4C4;
  --red-700: #E62429
  --red-650: #ED1D24;
  --white: #FFFFFF;
}

h1 {
  color: var(--white)
}

body {
  background-color: var(--black-600);
  font-family: 'Reboto Condensed', sans-serif;
}


body,
input,
textarea,
select,
button {
  font: 400, 0.825rem, 'Reboto Condensed', sans-serif;
  color: var(--color-white);
}

button {
  cursor: pointer;
  border: none;
  background: none;
}
a {
  color: inherit;
  text-decoration: none;
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
  font-size: 87.5%;
  }
}
`;

const BasicLayout = ({ children }: { children: any }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	);
};

export default BasicLayout;
