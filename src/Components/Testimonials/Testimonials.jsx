import React from "react";
import "./Testimonials.css";
import IMG1 from "../../Assets/MyPic.png";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client-avatar">
            <img src={IMG1} alt="Img one" />
          </div>
          <h5 className="client-name">Manju Rathod</h5>
          <small className="client-review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae ad velit impedit inventore itaque iure consectetur quae,
            provident nesciunt in ratione tempore odio laboriosam. Odio natus
            molestiae ea recusandae.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client-avatar">
            <img src={IMG1} alt="Img one" />
          </div>
          <h5 className="client-name">Manju Rathod</h5>
          <small className="client-review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae ad velit impedit inventore itaque iure consectetur quae,
            provident nesciunt in ratione tempore odio laboriosam. Odio natus
            molestiae ea recusandae.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client-avatar">
            <img src={IMG1} alt="Img one" />
          </div>
          <h5 className="client-name">Manju Rathod</h5>
          <small className="client-review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae ad velit impedit inventore itaque iure consectetur quae,
            provident nesciunt in ratione tempore odio laboriosam. Odio natus
            molestiae ea recusandae.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client-avatar">
            <img src={IMG1} alt="Img one" />
          </div>
          <h5 className="client-name">Manju Rathod</h5>
          <small className="client-review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae ad velit impedit inventore itaque iure consectetur quae,
            provident nesciunt in ratione tempore odio laboriosam. Odio natus
            molestiae ea recusandae.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
