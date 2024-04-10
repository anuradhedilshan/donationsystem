'use client';

import { FaBackward } from 'react-icons/fa6';
/* eslint-disable @next/next/no-img-element */
import News from './News';
import { useState } from 'react';

type Props = {
  title: string;
};

export default function DetailsBox({ title }: Props) {
  return (
    <div className=" p-5 m-4 rounded-2xl text-primary-dark  bg-secondary">
      <span className="text-4xl font-anton mb-3"> {title} </span>
      <div className=" block md:flex flex-wrap gap-2 justify-center">
        <News
          title="Community Comes Together to Support Struggling Children in Strilaka"
          img="/singups.jpg"
          link="Text"
        />
        <News
          title="Local Heroes Rally to Aid Families Facing Hardship in Rivertown"
          img="/bg.jpg"
          link="Text"
        />
      </div>
      <button className="px-19 bg-black text-white py-1 rounded-xl">
        Load More
      </button>
    </div>
  );
}

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = [
    <News
      key={1}
      title="Community Comes Together to Support Struggling Children in Strilaka"
      img="/singups.jpg"
      link="Text"
    />,
    <News
      key={2}
      title="Local Heroes Rally to Aid Families Facing Hardship in Rivertown"
      img="/bg.jpg"
      link="Text"
    />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  console.log('rerender');

  return (
    <div
      id="default-carousel"
      className=" p-5 m-4 rounded-2xl text-primary-dark relative  bg-secondary  min-h-[680px]"
      data-carousel="slide"
    >
      <div className="relative  overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentSlide ? '' : 'hidden'}`}
            data-carousel-item
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray'}`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>

































































































































































































































































































































































































          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
