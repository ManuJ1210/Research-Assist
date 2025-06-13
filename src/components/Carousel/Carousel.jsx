import {  useState } from "react";

const slides = [
  {
    img: "/images/s1.jpg",
    title: "Online Data Management",
    Discription :"Tired of writing your data on hardcopy, well we are here to provide you with an online platform to record your data."
  },
  {
    img: "/images/2.jpg",
    title: "Manuscript / Thesis / Report Editing",
    Discription :"Get help with manuscripts writing, report preparation and English language style and editing."
  },
  {
    img: "/images/3.jpg",
    title: "Research Designing and Data Analysis Support",
    Discription :"Use our expertise and skills in ensuring a robust study design using data directed to answer your scientific/ clinical questions."
                                              
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="relative overflow-hidden w-full h-[650px]">
     
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-[650px]"
          >
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-30"
            />
            <div className="absolute top-16  min-[773px]::left-2/5 lg:left-1/5 inset-0 flex flex-col items-center justify-center md:w-200">
              <h1 className="text-white font-bold text-4xl md:text-6xl text-center">
                {slide.title}
              </h1>
              <p className="text-white font-bold text-sm md:text-lg md:mt-6 text-center">
                {slide.Discription}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-6 h-2 rounded-full hover:scale-110 opacity-85 ${
              currentIndex === index ? "bg-white" : "bg-gray-900"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
