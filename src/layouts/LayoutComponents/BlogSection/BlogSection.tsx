import { faArrowRight, faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const BlogSection = () => {
  return (
    <div className='pt-[71px] bg-[#F7F7F7]'>
        <div className='grid grid-cols-1 mb-[14px] '>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold'>Form our blog</h2>
                <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
            <div className='max-w-[1024px] m-auto'>
                <div className='grid grid-cols-3 gap-[20px]  '>
                    <div className='box-blog'>
                        <div className='overflow-hidden group rounded-[10px] w-full relative'>
                            <img className='object-cover group-hover:scale-125 cursor-pointer transition-all duration-1000' src='https://themesflat.co/html/dreamhomehtml/assets/images/img-box/blog-1.jpg' alt='' />
                            <div className='font-semibold absolute flex justify-between items-center w-[152px] h-[32px] bottom-[10px] left-[50%] translate-x-[-50%] bg-[#fff] rounded-[6px] px-[15px]'>
                                <div>April</div>
                                <a href='#/' className='text-primary'>
                                    <FontAwesomeIcon icon={faFolder} />
                                    <span className='ml-[5px] '>Housing</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3>Building gains into housing stocks and how to trade the sector</h3>
                            <div>
                                <a href='#/'>
                                    <span>Read more</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='box-blog'>
                        <div className='overflow-hidden rounded-[10px] relative'>
                            <img className='object-cover ' src='https://themesflat.co/html/dreamhomehtml/assets/images/img-box/blog-1.jpg' alt='' />
                            <div>
                                <div>April</div>
                                <a href='#/'>
                                    <FontAwesomeIcon icon={faFolder} />
                                    <span>Housing</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3>Building gains into housing stocks and how to trade the sector</h3>
                            <div>
                                <a href='#/'>
                                    <span>Read more</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='box-blog'>
                        <div className='overflow-hidden rounded-[10px] relative'>
                            <img className='object-cover ' src='https://themesflat.co/html/dreamhomehtml/assets/images/img-box/blog-1.jpg' alt='' />
                            <div>
                                <div>April</div>
                                <a href='#/'>
                                    <FontAwesomeIcon icon={faFolder} />
                                    <span>Housing</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3>Building gains into housing stocks and how to trade the sector</h3>
                            <div>
                                <a href='#/'>
                                    <span>Read more</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSection