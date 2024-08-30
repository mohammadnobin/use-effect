import React from 'react'

const AboutCartReuseable = (props) => {
  return (
    <>
    <div className="">
        <h2 className='font-dm-sans font-bold text-[25px] text-[#262626] leading-[36px] pb-[11px] '>{props.title}</h2>
        <p className='font-dm-sans font-normal text-base text-justify text-[#767676] leading-[30px]'>{props.paregraph}</p>
    </div>
    </>
  )
}

export default AboutCartReuseable