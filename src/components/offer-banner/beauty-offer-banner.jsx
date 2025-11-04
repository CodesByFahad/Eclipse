import React from 'react';
import { useTimer } from 'react-timer-hook';
import { ArrowRightSmTwo } from '@/svg';
import Link from 'next/link';

const BeautyOfferBanner = () => {
  // Countdown timer setup
  const expiryTimestamp = new Date('2025-12-31T23:59:59');
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

  return (
    <>
      <section className="tp-collection-area pt-120">
        <div className="container">
          <div className="row gx-2 gy-2 gy-md-0">
            {/* LEFT SIDE - Layering Collection */}
<div className="col-xl-7 col-md-6">
  <div className="tp-collection-item tp-collection-height p-relative z-index-1 fix overflow-hidden rounded-3 bg-black">
    <div
      className="tp-collection-thumb include-bg transition-3 brightness-[0.7]"
      style={{
        backgroundImage: `url(/assets/img/men/promo/layering.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    ></div>
    <div className="tp-collection-content absolute bottom-10 left-10 text-white">
      <span className="uppercase text-sm text-white tracking-widest text-gray-100">
        Winter 2025 Collection
      </span>
      <h3 className="tp-collection-title text-4xl font-semibold mt-2 mb-4 leading-tight text-white">
        Layer Up <br /> In Style
      </h3>
      <div className="tp-collection-btn">
        <Link
          href="/shop"
          className="tp-btn border border-white  hover:bg-white hover:text-black transition-all duration-300"
        >
          Explore Jackets <ArrowRightSmTwo />
        </Link>
      </div>
    </div>
  </div>
</div>


            {/* RIGHT SIDE - Accessories Collection */}
            <div className="col-xl-5 col-md-6">
              <div className="tp-collection-item tp-collection-height grey-bg p-relative z-index-1 fix overflow-hidden rounded-3">
                <div
                  className="tp-collection-thumb has-overlay include-bg transition-3"
                  style={{
                    backgroundImage: `url(/assets/img/men/promo/model.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div className="tp-collection-content-1 text-white absolute bottom-10 left-10">
                  <h3 className="tp-collection-title-1 text-4xl font-semibold mb-3">
                    Timeless <br /> Accessories
                  </h3>
                  <div className="tp-collection-btn-1">
                    <Link
                      href="/shop"
                      className="tp-link-btn-line text-white hover:text-gray-300"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OFFER TEXT + COUNTDOWN */}
          <div className="row justify-content-center mt-4">
            <div className="col-xl-3 col-lg-4 col-md-5 text-center text-md-start">
              <div className="tp-collection-offer-wrapper mt-20">
                <p className="text-white/90">
                  Discover our <span className="text-cyan-400 font-semibold">Winter Men’s Selection</span> — Up to <span className="text-cyan-400 font-semibold">60% Off</span> this season.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="tp-collection-countdown d-flex align-items-center justify-content-center justify-content-md-start ml-20 mt-20">
                <div className="tp-product-countdown">
                  <div className="tp-product-countdown-inner text-white">
                    <ul className="flex gap-3 text-center">
                      <li><span>{days}</span> Days</li>
                      <li><span>{hours}</span> Hrs</li>
                      <li><span>{minutes}</span> Min</li>
                      <li><span>{seconds}</span> Sec</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BeautyOfferBanner;
