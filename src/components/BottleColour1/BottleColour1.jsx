import "./BottleColour1.sass"
import { useInView } from "react-intersection-observer";

function BottleColour1() {

    const { ref, inView } = useInView();

    return ( 
        <div className="wrapper">
            <div className="image_wrapper">
                <img className= {`bottle_image_blue ${inView ? 'animateBottleImage ' : ''}`} src="./Bottle1.png" alt="Navy bottle colour" ref={ref}></img>
            </div>
            <div className= {`text_bottle_colour ${inView ? 'animateTextBottle ' : ''}`}>
                <h1 className="text_bottle">Blues</h1>
            </div>
        </div>
     );
}

export default BottleColour1;