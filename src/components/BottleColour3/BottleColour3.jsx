import "./BottleColour3.sass"
import { useInView } from "react-intersection-observer";

function BottleColour3() {

    const { ref, inView } = useInView();

    return ( 
        <div className="wrapper_bottle3">
            <div className="image_wrapper3">
                <img className={`bottle_image3 ${inView ? 'animateBottleImage3 ' : ''}`} src="./Bottle3.png" alt="Peach bottle colour"  ref={ref}></img>
            </div>
            <div className={`text_bottle_colour_3 ${inView ? 'animateTextBottle3 ' : ''}`}>
                <h1 className="text_bottle">Nude</h1>
            </div>
        </div>
     );
}

export default BottleColour3;