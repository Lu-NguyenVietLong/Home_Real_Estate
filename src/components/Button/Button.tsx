import React from 'react'
import './Button.scss'

type Props = {
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  separate?: boolean;
  to?: string,
  href?: string,
  children: string,
}

const Button= ({leftIcon, rightIcon, separate = false, to, href, children}: Props) => {

  return (
    <div className='button group w-[178px] h-[52px] bg-[#FFA920] rounded-xl hover:brightness-90'>
        <a href='#/' className={`flex ${leftIcon ? 'justify-around' : 'justify-center'} items-center h-full`}>
            {leftIcon && <span className='icon-btn group-hover:animate-iconEffect text-[#fff]'>{leftIcon}</span>}
            <span className={`text-[#fff] font-bold text-[15px] relative ${leftIcon && separate ? 'before:left-[-18px] before:h-full before:absolute before:w-[1px] before:bg-[#fff] before:opacity-40' : ''} ${rightIcon && separate? 'before:right-[-10px] before:h-full before:absolute before:w-[1px] before:bg-[#fff] before:opacity-40' : ''}`}>
                {children}
            </span>
            {rightIcon && <span className='icon-btn text-[#fff]'>{rightIcon}</span>}
        </a>
    </div>
  )
}

export default Button