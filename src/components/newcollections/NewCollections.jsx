import React from 'react'
import './NewCollections.css'
import data_product from '../assets/new_collections'
import Item from '../item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className='collection-item'>
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
        </div>
  )
}

export default NewCollections