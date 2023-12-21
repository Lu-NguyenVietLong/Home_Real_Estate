import SliderHome from "../../components/SliderHome/SliderHome";
import AreaList from "../../layouts/LayoutComponents/AreaList/AreaList";
import BrandSection from "../../layouts/LayoutComponents/BrandSection/BrandSection";
import Feature from "../../layouts/LayoutComponents/Feature/Feature";

function Home() {
    return (
        <div className="Home w-full">
            <SliderHome />
            <BrandSection />
            <Feature />
            <AreaList />
        </div>
    );
}

export default Home;
