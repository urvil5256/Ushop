import { Carousel } from "flowbite-react";

export const Slider = () => {
  return (
    <>
      {/* Carousel wrapper */}
      <div className="relative h-[100vh] overflow-hidden">
        {/* Item 1 */}
        <Carousel id="carousel">
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
    </>
  );
};
