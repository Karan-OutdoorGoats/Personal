import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "./styles/mobile-top-banner.styles.css"
import { Autoplay, Navigation } from 'swiper/modules'

const MobileTopBanner = () => {
  return (
    <Swiper
      loop={true}
      autoplay={
        {
          delay:1800
        }
      }
      modules={[Autoplay]}
      edgeSwipeDetection={"prevent"}
      className='mobile_top_banner_swiper'
    >
      <SwiperSlide>
        <img src="https://cdn.anscommerce.com/live/image/adventuras/banner/623_202402071255_deutermob.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://cdn.anscommerce.com/live/image/adventuras/banner/623_202402071256_buffmob.png" alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default MobileTopBanner