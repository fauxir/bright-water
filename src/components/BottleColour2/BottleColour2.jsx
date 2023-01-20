import "./BottleColour2.sass"
import { useInView } from "react-intersection-observer";

function BottleColour2() {

    const { ref, inView } = useInView();

    return ( 
        <div className="wrapper_bottle2">
            <div className="image_wrapper">
                <img className={`bottle_image_green ${inView ? 'animateBottleImage2 ' : ''}`}  src="./Bottle2.png" alt="Army green bottle colour" ref={ref}></img>
            </div>
            <div className={`text_bottle_colour_2 ${inView ? 'animateTextBottle2 ' : ''}`}>
                <h1 className="text_bottle">Hunting Green</h1>
            </div>
        </div>
     );
}

export default BottleColour2;