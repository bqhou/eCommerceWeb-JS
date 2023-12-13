import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { ShopContext } from '../context/ShopContext'
import Breadcrum from '../components/breadcrums/Breadcrum'
import ProductDisplay from '../components/productdispaly/ProductDisplay'
import DescriptionBox from '../components/descriptionbox/DescriptionBox'
import RelatedProducts from '../components/relatedproducts/RelatedProducts'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id===Number(productId))

  return (
    <div>
   <Breadcrum product={product}></Breadcrum>
   <ProductDisplay product={product}></ProductDisplay>
   <DescriptionBox ></DescriptionBox>
   <RelatedProducts></RelatedProducts>
      </div>
  )
}

export default Product