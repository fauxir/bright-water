import "./BottleDetails.sass";
import { useInView } from "react-intersection-observer";

function BottleDetails() {
  const { ref, inView } = useInView();

  return (
    <div className="bottle_details_wrapper">
      <div className="img_wrapper">
        <img
          className="bottle_detail_image"
          src="./Bottle_details.png"
          alt="Bottle details"
        ></img>
      </div>
      <div className={`text ${inView ? "animateTextDetail " : ""}`}>
        <p className="details_title_text" ref={ref}>
          BrightWater Bottle
        </p>
        <h1 className="details_text" ref={ref}>
          Bright Water is a water bottle made out of ceramic materials and a
          wooden lid, characterized by minimal and esential design, defined by
          soft lines and enhanced by mate surface finish.
        </h1>
      </div>
    </div>
  );
}

export default BottleDetails;
