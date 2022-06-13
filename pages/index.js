import Head from 'next/head'
import Image from 'next/image'

import ReactAudioPlayer from 'react-audio-player'
import AudioPlayer from 'react-h5-audio-player'

import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'react-h5-audio-player/lib/styles.css'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eternas memórias</title>
        <meta name="Eternas memórias" content="Webpage with eternas memórias" />
      </Head>

      <div className={styles.content}>
        <h2 className={styles.title}>Eternas memórias</h2>
        <ReactAudioPlayer src="/audio/music.mp3" controls autoPlay loop />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          speed={2500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // breakpoints={{
          //   900: {
          //     slidesPerView: 3,
          //     spaceBetween: 30,
          //   },
          // }}
          loop
          slidesPerView={1}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src="/photos/1.jpg" alt="Mimo" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/2.jpg" alt="Mimo" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/3.jpg" alt="Mimo" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/4.jpg" alt="Mimo2" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/5.jpg" alt="Mimo" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/6.jpg" alt="Mimo" width={500} height={500} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/7.jpg" alt="Mimo" width={500} height={500} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
