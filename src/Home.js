import TopBannerSection from "./components/TopBannerSection/TopBannerSection";
import ProductsList from "./components/ProductList/ProductList";
import MovieSectionLanding from "./components/MovieSectionLanding/MovieSectionLanding";
import BottlePresentation from "./components/BottlePresentation/BottlePresentation";
import BottleDetails from "./components/BottleDetails/BottleDetails";
import BottleColour1 from "./components/BottleColour1/BottleColour1";
import BottleColour2 from "./components/BottleColour2/BottleColour2";
import BottleColour3 from "./components/BottleColour3/BottleColour3";
import "./home.sass";

export default function Home({ productData }) {

  return (
    <div>
      <TopBannerSection />
      <MovieSectionLanding />
      <BottleDetails />
      <BottlePresentation />
      <BottleColour1 />
      <BottleColour2 />
      <BottleColour3 />
      <ProductsList products={productData}/>
    </div>
  );
}
