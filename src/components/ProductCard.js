import React from "react"
import Btn from "./Button"

const ProductCard = ({ product }) => {
	return (
		<div className='card'>
			<img
				className='img'
				src={product.images}
				alt='product_image'
			/>
			<h4 className='p-title'>{product.title}</h4>
			<div className=' p-price'>${product.price}</div>
			<p className='p-des'>{product.description}</p>
			<small className='p-date'>{product.creationAt}</small>
			<div className='both-button'>
				<Btn
					title={"Buy now"}
					btnStyle={"button1"}
				/>
				<Btn
					title={"Add to card"}
					btnStyle={"button2"}
				/>
			</div>
		</div>
	)
}

export default ProductCard
