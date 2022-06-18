import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ReactAudioPlayer from 'react-audio-player'

import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from '../styles/Home.module.css'

export default function Home() {
  const tracks = ['/audio/music.mp3', '/audio/music2.mp3', '/audio/music3.mp3', '/audio/music4.mp3']

  const [track, setTrack] = useState(tracks[0])
  const ref = useRef()

  function nextTrack() {
    const currentIndex = tracks.indexOf(track)
    const nextIndex = currentIndex + 1
    const lastIndex = tracks.length - 1
    const nextElement = tracks[nextIndex > lastIndex ? 0 : nextIndex]
    setTrack(nextElement)
  }

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.audioEl.current.play()
      }, 1000)
    }
  }, [track])

  return (
    <div className={styles.container}>
      <Head>
        <title>Eternas memórias</title>
        <meta name="Eternas memórias" content="Webpage with eternas memórias" />
      </Head>

      <div className={styles.content}>
        <h2 className={styles.title}>Eternas memórias</h2>
        <div className={styles.audioPlayer}>
          <ReactAudioPlayer ref={ref} src={track} controls onEnded={() => nextTrack()} />
        </div>
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
