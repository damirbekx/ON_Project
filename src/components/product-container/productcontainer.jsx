import React from 'react'
import style from './productcontainer.module.scss'
import Products from '../products/products'
import { products } from '../../data/products'

const ProductContainer = () => {
  return (
    <div className='container'>
        <div className={style.product_tab}>
          <button type='button' className={style.tab_btn}>Хиты</button>
          <button type='button' className={style.tab_btn}>Скидки</button>
          <button type='button' className={style.tab_btn}>Новинки</button>
        </div>
      <div className={style.product_container}>
        {products.map(item => (
          <Products key={item.id} id={item.id} img={item.img} name={item.name} text={item.text} price={item.price} discount={item.discount} />
        ))}
      </div>
    </div>
  )
}

export default ProductContainer