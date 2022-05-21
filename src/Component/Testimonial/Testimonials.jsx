import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonials = () => {

    const client = [
        {
            img: profilePic1,
            review:` Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Perferendis minima, non dicta ut temporibus
             consequuntur inventoreconsequatur voluptatum eos ipsa dolores
             eum lorem20adebitis autdistinctio ipsum veritatis rem sequi`
        },
        {
            img: profilePic2,
            review:` Lorem ipsum dolor sit, amet consectetur
             adipisicing elit. Perferendis minima, non dicta ut temporibus
              consequuntur inventoreconsequatur voluptatum eos ipsa dolores
              eum lorem20adebitis autdistinctio ipsum veritatis rem sequi`
        },
        {
            img: profilePic3,
            review:
            ` Lorem ipsum dolor sit, amet consectetur
             adipisicing elit. Perferendis minima, non dicta ut temporibus
              consequuntur quatur voluptatum eos ipsa dolores
              eum lorem20adebitis autdistinctio ipsum veritatis rem sequi`,
        },
        {
            img: profilePic4,
            review:` Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Perferendis minima, non dicta ut temporibus
             oreconsequatur voluptatum eos ipsa dolores
             eum lorem20adebitis autdistinctio ipsum veritatis rem sequi`
        }
    ]




  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always gets </span>
            <span>Execptional work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}} ></div>
            <div className="blur t-blur2" style={{background: "skyblue"}} ></div>
        </div>
        {/* Slider */}
        <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}

        >
            {client.map((client, index)=>(
                <SwiperSlide  key={index+client}>
                    <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Testimonials