import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  
//   <form className="text-orange-800 w-full flex justify-center items-center rounded-xl overflow-hidden mx-auto bg-white shadow-md">
//   <input
//     type="email"
//     className="px-7 py-3 grow focus:outline-none"
//     placeholder="Enter email"
//   />
//   <button className="flex justify-center items-center text-white text-[22px] py-3 px-7 border border-blue-600 bg-blue-600 hover:bg-opacity-90 hover:border-opacity-90 duration-300">
//     <FontAwesomeIcon icon={faSearch} />
//   </button>
// </form>
// );
// const QuoteOfTheDay = () => (
//   <div className="text-center bg-white text-red-900 p-3 rounded-xl shadow-md">
//     <h2 className="text-3xl font-semibold mb-4 ">Quote of the Day</h2>
//     <p className="text-xl  italic">
//     "A temple is a place where one can feel the divine presence and find peace and solace." - Anonymous
//     </p>
//   </div>
// );
const QuoteOfTheDay = () => (
  <div className="text-center  text-white p-3 rounded-xl shadow-md">
    <h2 className="text-4xl font-semibold mb-4 ">Quote of the Day</h2>
    <p className="text-2xl  italic">
    "A temple is a place where one can feel the divine presence and find peace and solace." - Anonymous
    </p>
  </div>
);





const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false,
  };

  const images = [
    "/hero1.webp",
    "/hero2.webp",
    "/hero3.webp",
  ];

  return (
    <section className="relative text-white ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-screen relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})`,backgroundPosition:'top center' }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="container px-4 mx-auto">
                <div className="md:max-w-5xl mx-auto text-center">
                  <h1 className="text-6xl font-bold leading-tight md:text-[62px] mb-2">
                    VIRTUAL VISIT TO<br/> INDIAN PILGRIMAGE
                  </h1>
                  <p className="text-2xl opacity-80 leading-snug px-12 py-6">
                    Discover the beauty of Indian Pilgrimage with DrishtiDham
                  </p>
                  <div className="sm:max-w-lg mx-auto flex justify-center">
                    {/* <SearchForm /> */}
                    <QuoteOfTheDay/>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousal;
