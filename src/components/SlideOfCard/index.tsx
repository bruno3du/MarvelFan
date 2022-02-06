/** @format */

import Image from 'next/image';
import { Container, Card } from './styles';
import HomemAranha from '../../assets/images/homem-aranha.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';

export default function SlideOfCard() {
	const slides = Array.from({ length: 100 }).map((el, index) => (
		<Card key={index}>
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
	));

	return (
		<Container>
			<div>
				<Swiper
					modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
					breakpoints={{
						// when window width is >= 320px
						320: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						// when window width is >= 480px
						480: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						// when window width is >= 640px
						890: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						// when window width is >= 640px
						1080: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
					navigation={{
						nextEl: '.arrowRight',
						prevEl: '.arrowLeft',
					}}
					virtual
					scrollbar={{ draggable: true }}>
					<div className='arrowLeft'>
						<IoIosArrowBack className='iconLeft' />
					</div>
					{slides.map((slideContent, index) => (
						<SwiperSlide key={index + 1} virtualIndex={index}>
							{slideContent}
						</SwiperSlide>
					))}
					<div className='arrowRight'>
						<IoIosArrowForward className='iconRight' />
					</div>
				</Swiper>
			</div>
		</Container>
	);
}
