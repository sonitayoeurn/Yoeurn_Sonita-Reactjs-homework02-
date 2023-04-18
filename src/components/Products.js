import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function Products() {
	const [product, setProduct] = useState([{}])
	useEffect(() => {
		const fetchData = async () => {
			const data = await (
				await fetch("https://api.escuelajs.co/api/v1/products")
			).json()
			setProduct(data)
		}
		fetchData()
	}, [])

	return (
		<div className="flex flex-wrap gap-3 justify-center">
			
			{product.map((p,index) => (
				<ProductCard product={p} key={index}  />
			))}
			
				
		</div>
	)
}
