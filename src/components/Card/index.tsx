/** @format */

import Image from 'next/image';
import { Container } from './styles';
import HomemAranha from '../../assets/images/homem-aranha.jpg';
import { BsArrowRightCircleFill } from 'react-icons/bs';

export default function Card() {
	return (
		<Container>
			<div>
				<Image
					src={HomemAranha}
					width='320px'
					height='200px'
					alt='Homem Aranha'
				/>
			</div>
			<div>
				<h4>HOMEM-ARANHA : EPISODE 10</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi
					rerum velit commodi unde aperiam corrupti totam nemo quibusdam
					eligendi i....
				</p>
				<span>MODIFIED: 24/10/2021</span>
				<button>
					MORE <BsArrowRightCircleFill />
				</button>
			</div>
		</Container>
	);
}
