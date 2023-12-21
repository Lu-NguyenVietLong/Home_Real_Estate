import SliderHome from "../../components/SliderHome/SliderHome";
import BrandSection from "../../layouts/LayoutComponents/BrandSection/BrandSection";
import Feature from "../../layouts/LayoutComponents/Feature/Feature";

function Home() {
    return (
        <div className="Home w-full">
            <SliderHome />
            <BrandSection />
            <Feature />
        </div>
    );
}

export default Home;
