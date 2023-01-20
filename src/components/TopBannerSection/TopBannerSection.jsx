/* eslint-disable jsx-a11y/img-redundant-alt */
import "./topBannerSection.sass";
import { useInView } from "react-intersection-observer";

export default function TopBannerSection({ topBannerImage }) {
  
  const { ref, inView } = useInView();
  
  return (
    <div className="hero_wrapper" ref={ref}>
      <h1 className={`brand_name_hero ${inView ? 'animateTextBottlePicHero ' : ''}`}>BrightWater</h1>
      <img className={`bottle_pic_hero ${inView ? 'animateBottlePicHero ' : ''}`} src="./Hero_bottle.png" alt="Image with BrightWater bottle" ref={ref}></img>
    </div>
  );
}
