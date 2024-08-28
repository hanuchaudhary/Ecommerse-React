import React from 'react'

const Card = ({productName, productCategory, price}) => {
  return (
    <div className=' border w-72'>
        <div className="card bg-rose-800 border h-96">
          <img className='h-full w-full object-cover' src="https://lp2.hm.com/hmgoepprod?set=source[/54/f6/54f69308f864cd3b3c46871991686e3c77b0846b.jpg],origin[dam],category[men_tshirtstanks_printed],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt="" />
        </div>
        <div className="details mt-4 text-sm capitalize">
          <h1 className='font-semibold text-md text-zinc-500'>{productCategory}</h1>
          <h1>{productName}</h1>
          <h1 className='font-semibold'>${price}</h1>
        </div>
    </div>
  )
}

export default Card