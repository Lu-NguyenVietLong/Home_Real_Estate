import SliderHome from "../../components/SliderHome/SliderHome";
import AreaList from "../../layouts/LayoutComponents/AreaList/AreaList";
import BrandSection from "../../layouts/LayoutComponents/BrandSection/BrandSection";
import Feature from "../../layouts/LayoutComponents/Feature/Feature";
import MeetSection from "../../layouts/LayoutComponents/MeetSection/MeetSection";
import ProductRent from "../../layouts/LayoutComponents/ProductRent/ProductRent";
import ProductSale from "../../layouts/LayoutComponents/ProductSale/ProductSale";

function Home() {
    return (
        <div className="Home w-full">
            <SliderHome />
            <BrandSection />
            <Feature />
            <AreaList />
            <ProductSale />
            <ProductRent />
            <MeetSection />
        </div>
    );
}

export default Home;
