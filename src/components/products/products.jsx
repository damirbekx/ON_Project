import React from 'react'
import './products.scss'
import { NavLink } from 'react-router-dom'

const Products = ({img, id, name, text, price, discount}) => {
  console.log(id);
  return (
    <NavLink to={`/product/${id}`}>
      <div className='product_card'>
        <div className="product_img">
            <img src={img} alt="product image" />
        </div>
        <h3 className="product_title">
        {name}
        </h3>
        <p className="product_text">
        {text}
        </p>
        <strong className='product_price'>{price}</strong>
        <div className="discount_block">
            <p className="disablet_price">
            {discount}
            </p>
        </div>
        <div className='button_block'>
          <button className='btn_primary'>Купить</button>
          <button className='btn_light'>В 1 клик</button>
        </div>
    </div>
    </NavLink>
  )
}

export default Products