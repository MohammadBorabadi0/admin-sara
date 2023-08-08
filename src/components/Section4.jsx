import { chanels } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Section4 = () => {
  const settings = {
    spaceBetween: 20,
    slidesPerView: 3,
  };

  return (
    <section className="px-8 py-4 bg-white my-4 rounded-xl shadow-md mr-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Channels</h2>
        <p className="text-sm font-semibold text-gray-500">Your statistics for 1 week period.</p>
      </div>
      <section className="flex mt-2">
        <Swiper {...settings} className="py-4">
          {chanels.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center gap-6 font-semibold bg-red-50 py-5 rounded-xl min-w-[200px] max-w-[250px] cursor-grab"
            >
              <img
                key={index}
                src={item.icon}
                className="w-10 h-10 bg-gray-500 rounded-full p-1"
              />
              <h4 className="text-xl">{item.name}</h4>
              <span
                className={`text-lg ${item.amount > 0 ? "text-green-600" : "text-red-600"}`}
              >
                {item.amount > 0 ? `+${item.amount}` : `${item.amount}`}%
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Section4;
