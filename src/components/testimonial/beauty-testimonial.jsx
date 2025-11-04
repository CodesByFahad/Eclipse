import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import dynamic from 'next/dynamic';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // modern icon arrows

// slider setting 
const slider_setting = {
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: ".tp-testimoinal-slider-dot-3",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-testimoinal-slider-button-next-3",
    prevEl: ".tp-testimoinal-slider-button-prev-3",
  },
  breakpoints: {
    '992': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  }
};

const BeautyTestimonial = () => {
  // 🔹 Updated Men’s Wear Reviews
  const mens_testi_data = [
    {
      id: 1,
      name: "Adeel Khan",
      designation: "Entrepreneur",
      review: 5,
      desc: "Eclipse has completely changed how I approach fashion. The attention to detail and quality in every piece is outstanding — easily my favorite men’s brand.",
      user: "/assets/img/testimonial/m1.jpg",
    },
    {
      id: 2,
      name: "Salman Raza",
      designation: "Creative Director",
      review: 4.5,
      desc: "Their winter jackets and accessories are unmatched. Eclipse combines modern design with premium feel — perfect for any occasion.",
      user: "/assets/img/testimonial/m2.jpg",
    },
    {
      id: 3,
      name: "Zain Abbas",
      designation: "Marketing Executive",
      review: 5,
      desc: "Stylish, comfortable, and durable — that’s Eclipse. I’ve never had a better experience shopping online for men’s wear.",
      user: "/assets/img/testimonial/m3.jpg",
    },
    {
      id: 4,
      name: "Farhan Malik",
      designation: "Software Engineer",
      review: 4.5,
      desc: "From jackets to watches, every product I ordered was top-notch. Their presentation and delivery experience make it even better.",
      user: "/assets/img/testimonial/m4.jpg",
    },
  ];

  return (
    <>
      <section className="tp-testimonial-area pt-115 pb-100 relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <div className="tp-section-title-wrapper-3 mb-45">
                <span className="tp-section-title-pre-3">Customers Review</span>
                <h3 className="tp-section-title-3">What our Clients say</h3>
              </div>
            </div>
          </div>

          <div className="row relative">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider-3 relative">
                {/* Swiper */}
                <Swiper
                  {...slider_setting}
                  modules={[Pagination, Navigation]}
                  className="tp-testimoinal-slider-active-3 swiper-container"
                >
                  {mens_testi_data.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="tp-testimonial-item-3 grey-bg-7 p-relative z-index-1 rounded-3"
                    >
                      {/* Rating */}
                      <div className="tp-testimonial-rating tp-testimonial-rating-3">
                        <Rating
                          fillColor="#010F1C"
                          readonly={true}
                          allowFraction
                          size={20}
                          initialValue={item.review}
                        />
                      </div>

                      {/* Content */}
                      <div className="tp-testimonial-content-3">
                        <p>{item.desc}</p>
                      </div>

                      {/* User Info */}
                      <div className="tp-testimonial-user-wrapper-3 d-flex">
                        <div className="tp-testimonial-user-3 d-flex align-items-center">
                          <div className="tp-testimonial-avater-3 mr-10">
                            <Image
                              src={item.user}
                              alt="user img"
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                            <h3 className="tp-testimonial-user-3-title">
                              {item.name} /
                            </h3>
                            <span className="tp-testimonial-3-designation">
                              {item.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Pagination */}
                <div className="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-50"></div>

                {/* Navigation Arrows */}
                <button
                  className="tp-testimoinal-slider-button-prev-3 absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 text-gray-400 hover:text-[#00F5FE] hover:border-[#00F5FE] hover:shadow-[0_0_15px_#00F5FE80] transition-all duration-300 bg-transparent"
                >
                  <ArrowLeft size={30} />
                </button>
                <button
                  className="tp-testimoinal-slider-button-next-3 absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-gray-400 text-gray-400 hover:text-[#00F5FE] hover:border-[#00F5FE] hover:shadow-[0_0_15px_#00F5FE80] transition-all duration-300 bg-transparent"
                >
                  <ArrowRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BeautyTestimonial), { ssr: false });
