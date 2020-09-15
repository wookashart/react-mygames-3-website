import React from 'react';

// Helpers
import { colors, dimensions, animation } from '../../styles/variables';

// Components
import Carousel from 'react-multi-carousel';
import Link from 'next/link';

interface CarouselDefaultProps {
  slides: SlideProps[];
}

interface SlideProps {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
  id: number;
}

const CarouselDefault = ({ slides }: CarouselDefaultProps) => {
  const responsive = {
    desktopLg: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    desktopMd: {
      breakpoint: { max: 1023, min: 901 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 900, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        dotListClass="carousel-default-dots"
        itemClass="carousel-default-item"
        sliderClass="carousel-default-slider"
        containerClass="carousel-default-wrapper"
      >
        {slides.map(slide => (
          <Link href={slide.url} key={slide.id}>
            <a>
              <div className="carousel-slide" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="carousel-slide-text">
                  <p className="carousel-slide-title">{slide.title}</p>
                  <p className="carousel-slide-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Carousel>
      <style jsx>{`
        a {
          text-decoration: none;
          color: ${colors.white};
        }

        .carousel-slide {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          height: 280px;
          max-width: 200px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-slide:hover .carousel-slide-text {
          opacity: 1;
          visibility: visible;
        }

        .carousel-slide-text {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column;
          padding: 20px;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: all ${animation.fast}ms ease-out;
        }

        .carousel-slide-title {
          margin: 0;
          font-size: ${dimensions.fontSize.large}px;
          font-weight: 600;
        }
        .carousel-slide-subtitle {
          margin: 0;
          margin-top: 5px;
          font-size: ${dimensions.fontSize.small}px;
        }
      `}</style>
      <style jsx global>{`
        .carousel-default-wrapper {
          padding: 10px 0;
        }

        .carousel-default-item {
          padding: 0 10px;
        }
      `}</style>
    </>
  );
};

export default CarouselDefault;
