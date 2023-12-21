import {PRODUCT_DATA} from '../../../FakeData/PRODUCT_DATA'
import ProductCard from '../../../components/ProductCard/ProductCard'

const  FEATURE_DATA = ['Houses', 'Smart home', 'Apartments', 'Office', 'Villa', 'Bungalow']

const Feature = () => {

    console.log('list', PRODUCT_DATA);
    
  return (
    <div className='mt-[100px]'>
        <div className="grid gird-cols-1">
            <div className="Feature-layout flex justify-center">
                <div className='heading-feature text-center'>
                    <h2 className='text-[45px] font-bold mb-[14px]'>Featured properties</h2>
                    <p className='text-[#8E8E93] mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
                </div>
            </div>
            <div className='Feature-tab text-center'>
                <div className='box-tab '>
                    <ul className='flex justify-center'>
                        {FEATURE_DATA.map((tab, index) =>(
                            <li className='py-[8px] px-[14px] shadow-shadowDefault3 cursor-pointer hover:font-medium hover:text-primary mr-[13px]
                                            before:w-[60px] before:h-[24px] before:absolute before:bg-[#fff] before:top-[0px]  before:shadow-shadowDefault
                            '>{tab}</li>
                        ))}
                    </ul>
                </div>
                <div className='mt-[30px] grid lg:grid-cols-4 gap-[30px] md:grid-cols-2 mx-[25px]'>
                    {
                        PRODUCT_DATA.map((item, index) => (
                            <ProductCard product={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature