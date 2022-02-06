/** @format */

import Image from 'next/image';
import GlobalStyle from '../../styles/GlobalStyle';
import { Container } from './styles';
import HomemAranha from '../../assets/images/homem-aranha.jpg';
import SlideOfCard from '../../components/SlideOfCard';

export default function Characters() {
	return (
		<GlobalStyle>
			<Container>
				<h1>CHARACTER</h1>
				<hr />
				<section>
					<div>
						<div className='character-name'>
							<h2>HOMEM-ARANHA</h2>
						</div>
						<div className='character-thumbnail'>
							<div className='character-firstContainer'></div>
							<Image
								className='character-image'
								src={HomemAranha}
								width='500px'
								height='300px'
								alt='Homem Aranha'
							/>
							<div className='character-secondContainer'></div>
						</div>
					</div>
					<div className='character-name'>
						<h2>SÉRIES</h2>
					</div>
					<SlideOfCard />
					<div className='character-name'>
						<h2>CREATORS</h2>
					</div>
					<SlideOfCard />
					<div className='character-name'>
						<h2>COMICS / HQ</h2>
					</div>
					<SlideOfCard />
				</section>
			</Container>
		</GlobalStyle>
	);
}
