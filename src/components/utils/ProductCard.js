import React from 'react'

export default function ProductCard({index,title,description,image}) {
	return (
		<>
			<div  class="w-80 m-5 p-4  shadow-xl border-slate-950	 rounded  md:p-6 dark:border-gray-700" key={index}>
				<div class="flex items-center justify-center h-48 mb-4 bg-gray-500 rounded dark:bg-gray-700">
					<img src={image} alt='' class="w-full h-full" aria-hidden="true" fill="currentColor" />
				</div>
				<div class="h-10  w-full mb-3 line-clamp-1" style={{fontSize:"20px"}}>{title}</div>
				<div class="  mb-2 text h-24">
					<p class="tracking-widest text-1xl text-gray-500 md:text-lg dark:text-gray-400 line-clamp-3 " style={{lineHeight:"30px"}}>
						{description}
					</p>
				</div>
				<button type="button" class="  text-white border bg-blue-500  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Buy Now</button>
			</div>
		</>
	)
}
