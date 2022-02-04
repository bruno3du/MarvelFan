/** @format */

import Image from 'next/image';
import { Container, Card } from './styles';
import HomemAranha from '../../assets/images/homem-aranha.jpg';

export default function SlideOfCard() {
	return (
		<Container>
			<div>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
				<Card>
					<Image
						src={HomemAranha}
						alt='Homem Aranha'
						objectFit='cover'
						className='imgSlide'
						layout='fill'
					/>
					<div className='card-shadow'>
						<h4>HOMEM ARANHA</h4>
					</div>
				</Card>
			</div>
		</Container>
	);
}
