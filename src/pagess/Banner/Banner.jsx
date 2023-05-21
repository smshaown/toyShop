import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#453D62]">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                className="max-w-sm rounded-lg shadow-2xl"
              />
             <div class="w-full md:w-1/2">
                <button class="text-2xl lg:text-3xl font-bold bg-[#FF6799] text-white p-3 rounded-md">
                  Big Discount
                </button>
                <h1 class="text-4xl lg:text-5xl font-bold text-[#4ACDD5] mt-3">
                  KIDSS OFFER
                </h1>
                <p class="py-4 lg:py-6 text-white">
                  This learning is a very good toy to teach kids the basics of
                  alphabet, phonics, how to type words, and select the right
                  letters for the words.
                </p>
                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#453D62]">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img
                src="https://images.unsplash.com/photo-1584515828432-06198c3196a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className="max-w-sm rounded-lg shadow-2xl "
              />
              <div class="w-full md:w-1/2">
                <button class="text-2xl lg:text-3xl font-bold bg-[#FF6799] text-white p-3 rounded-md">
                  Big Discount
                </button>
                <h1 class="text-4xl lg:text-5xl font-bold text-[#4ACDD5] mt-3">
                  KIDSS OFFER
                </h1>
                <p class="py-4 lg:py-6 text-white">
                  This learning is a very good toy to teach kids the basics of
                  alphabet, phonics, how to type words, and select the right
                  letters for the words.
                </p>
                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#453D62]">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img
                src="https://images.unsplash.com/photo-1555448049-f8657e9fc8f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className="max-w-sm rounded-lg shadow-2xl"
              />
             <div class="w-full md:w-1/2">
                <button class="text-2xl lg:text-3xl font-bold bg-[#FF6799] text-white p-3 rounded-md">
                  Big Discount
                </button>
                <h1 class="text-4xl lg:text-5xl font-bold text-[#4ACDD5] mt-3">
                  KIDSS OFFER
                </h1>
                <p class="py-4 lg:py-6 text-white">
                  This learning is a very good toy to teach kids the basics of
                  alphabet, phonics, how to type words, and select the right
                  letters for the words.
                </p>
                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
