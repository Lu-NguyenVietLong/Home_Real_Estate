import ProductListSlide from "../../../components/ProductListSlide/ProductListSlide"
import { PRODUCT_DATA } from '../../../FakeData/PRODUCT_DATA'

const ProductSale = () => {
  return (
    <div className='pb-[50px]'>
        <div className='grid grid-cols-1 mt-[71px] mb-[14px] '>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold'>Properties for sale</h2>
                <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
        </div>
        <div className="px-[170px] mt-[60px] pb-[71px]">
          <ProductListSlide products={PRODUCT_DATA} slidesToShow={3} />
        </div>
    </div>
  )
}

export default ProductSale