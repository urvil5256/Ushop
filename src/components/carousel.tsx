import { Carousel } from "flowbite-react";

export const Slider = () => {
  return (
    <div
      className="relative w-full calc(100vh-64px)"
      data-carousel="slide"
      id="default-carousel"
    >
      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-lg">
        {/* Item 1 */}
        <Carousel>
          <img
            alt="..."
            className="aspect-video"
            src="images/carousel/image2.jpg"
          />
          <img
            alt="..."
            className="aspect-video"
            src="images/carousel/image1.jpg"
          />
          <img
            alt="..."
            className="aspect-video"
            src="images/carousel/image3.png"
          />
          <img
            alt="..."
            className="aspect-video"
            src="images/carousel/image4.jpg"
          />
          <img
            alt="..."
            className="aspect-video"
            src="images/carousel/image5.jpg"
          />
        </Carousel>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          aria-current="true"
          aria-label="Slide 1"
          className="w-3 h-3 rounded-full"
          data-carousel-slide-to="1"
          type="button"
        />
        <button
          aria-current="false"
          aria-label="Slide 2"
          className="w-3 h-3 rounded-full"
          data-carousel-slide-to="2"
          type="button"
        />
        <button
          aria-current="false"
          aria-label="Slide 3"
          className="w-3 h-3 rounded-full"
          data-carousel-slide-to="3"
          type="button"
        />
        <button
          aria-current="false"
          aria-label="Slide 4"
          className="w-3 h-3 rounded-full"
          data-carousel-slide-to="4"
          type="button"
        />
        <button
          aria-current="false"
          aria-label="Slide 5"
          className="w-3 h-3 rounded-full"
          data-carousel-slide-to="5"
          type="button"
        />
      </div>
      {/* Slider controls */}
      <button
        data-carousel-prev
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        type="button"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-zinc-50/30 group-hover:bg-white/50 dark:group-hover:bg-gray-50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-blue-500 dark:text-gray-800 rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        data-carousel-next
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        type="button"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-zinc-50/30 group-hover:bg-white/50 dark:group-hover:bg-gray-50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-blue-500 dark:text-gray-800 rtl:rotate-180"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
