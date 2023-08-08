import ReviewComponent from "./ReviewComponent";
import TableComponent from "./TableComponent";

const Section3 = () => {
  return (
    <section className="grid grid-cols-3 gap-2 mt-6 overflow-x-hidden mx-2 sm:ml-0">
      <div className="col-span-1">
        <TableComponent />
      </div>
      <div className="col-span-2">
        <ReviewComponent />
      </div>
    </section>
  );
};

export default Section3;
