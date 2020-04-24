import React from 'react';

// Config

// Helpers
import { colors, animation } from '../../styles/variables';
import { Articles } from '../../content/types/articles';

// Components
import Wrapper from '../common/Wrapper';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

interface HomepageNewsCarouselProps {
  slides: Articles[];
}

const HomepageNewsCarousel = ({ slides }: HomepageNewsCarouselProps) => {
  return (
    <>
      <div className="homepage-carousel-wrapper">
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
          {slides.map((slide: Articles) => (
            <div key={slide.article_id} className="homepage-carousel-slide">
              <img src={`/images/img/articles/${slide.article_image}`} alt={slide.article_title} />

              <Wrapper className="homepage-carousel-text">
                <div className="homepage-carousel-text-inner">
                  <h3>{slide.article_title}</h3>
                  <p>{slide.article_head}</p>
                  <Link href={`/article/${slide.article_id}`}>
                    <a>Czytaj więcej</a>
                  </Link>
                </div>
              </Wrapper>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>{`
        .homepage-carousel-text-inner {
          text-align: left;
          max-width: 550px;
          color: ${colors.white};
          background-color: ${colors.ui.default};
          padding: 30px 15px;
        }

        .homepage-carousel-text-inner h3 {
          margin: 0;
        }

        .homepage-carousel-text-inner a {
          text-decoration: none;
          color: ${colors.white};
          transition: ease-out color ${animation.fast}ms;
        }

        .homepage-carousel-text-inner a:hover {
          color: ${colors.ui.dark};
        }
      `}</style>
      <style global jsx>{`
        .carousel .control-dots .dot {
          background-color: ${colors.white};
          outline: none;
          opacity: 0.7;
        }

        .carousel .control-dots .dot.selected {
          background-color: ${colors.ui.dark};
        }

        .carousel .control-next.control-arrow:before {
          border-left-color: ${colors.ui.default};
        }

        .carousel .control-prev.control-arrow:before {
          border-right-color: ${colors.ui.default};
        }

        .slide {
          height: 500px;
          display: flex;
        }

        .slide img {
          height: 500px;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .homepage-carousel-text {
          position: absolute;
          top: 40px;
          bottom: 40px;
          left: 0;
          right: 0;
          display: flex;
          align-items: flex-end;
          max-width: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default HomepageNewsCarousel;
