import "./BottlePresentation.sass"
import { useInView } from "react-intersection-observer";

function BottlePresentation() {

    const { ref, inView } = useInView();

    return ( 
        <div className="bottle_presentation_wrapper"  ref={ref}>
            <div className="three_bottles">
               <img className={`navy_bottle1 ${inView ? 'animateNavyBottle ' : ''}`} src="./Bottle1.png" alt="Blue bottle" ref={ref}></img>
               <img className= {`armygreen_bottle2 ${inView ? 'animateArmyGreenBottle ' : ''}`} src="./Bottle2.png" alt="Green bottle" ref={ref}></img>
               <img className= {`peach_bottle3 ${inView ? 'animatePeachBottle ' : ''}`} src="./Bottle3.png" alt="Peach bottle" ref={ref}></img>
            </div>
            <div className={`text ${inView ? 'animatetext ' : ''}`} ref={ref}>
                <p className="text_title">BrightWater Colors</p>
                <h1 className="text_description">This product is available in three different colors to ensure a wider choice for users.</h1>
            </div>
        </div>
     );
}

export default BottlePresentation;