import React from 'react'
import Slider from 'react-slick'
import ProductCard from '../ProductCard/ProductCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductListSlide.scss'

type ProductsProps = {
  img: string[],
  title: string,
  address: string,
  price: number,
  beds: number,
  baths: number,
  sqft: number,
  compare: string,
  author: {
      name: string,
      img: string,
  },
  days: number,
}[]

const ProductSlide = ({products, slidesToShow}: {products: ProductsProps, slidesToShow: number}) => {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className='product-list'>
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard product={product} />
          ))}
      </Slider>
    </div>
  )
}

export default ProductSlide