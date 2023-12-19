import React from 'react'

const Card = (props) => {
  return (
    <div className=''>
      <div key={props.id} className=" card-img aspect-[3/3]">
        <img src={props.image} alt="card_img_1" className="w-full" />
      </div>
      <div className="card-body p-5 px-8 bg-white">
        <h4 className='items-center text-center text-xl lg:text-2xl font-[700] flex flex-col gap-3'>
          <div>{props.text1}</div>
          <div>{props.text2}</div>
          <div>{props.text3}</div>
          <div>{props.text4}</div>
          <div>{props.text5}</div>
          <div>{props.text6}</div>
        </h4>
      </div>
    </div>
  )
}

export default Card