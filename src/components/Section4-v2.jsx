import { chanels } from "../data/data";

const Section4 = () => {
  return (
    <section className="flex gap-8 bg-white px-8 pt-20 pb-10 my-4 rounded-xl shadow-md overflow-x-scroll no-scrollbar">
      <div className="flex flex-col gap-4 min-w-fit mt-10">
        <h2 className="text-2xl font-semibold">Channels</h2>
        <p className="text-gray-600">Your statistics for 1 week period.</p>
      </div>
      <div className="flex gap-8 justify-center items-center">
        {chanels.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col relative bg-gray-200 w-40 h-48 px-8 py-12 rounded-xl font-semibold text-xl"
          >
            <img
              key={index}
              src={item.icon}
              className="absolute -top-9 bg-slate-500 rounded-full w-10 object-contain p-1"
            />
            <div className="flex flex-col gap-8 items-center">
              <h4>{item.name}</h4>
              <span
                className={item.amount > 0 ? "text-green-600" : "text-red-600"}
              >
                {item.amount > 0 ? `+${item.amount}` : `${item.amount}`}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
