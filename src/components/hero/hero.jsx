import React from 'react'
import style from './hero.module.scss'

export const Hero = () => {
  return (
    <section id={style.hero}>
      <div className={style.hero_wrapper}>
        <div className="container">
          <div className={style.hero_content}>
            <h1 className={style.hero_title}>
              Истина в качестве
            </h1>
            <p className={style.hero_text}>
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
              ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>
            <button className={style.hero_btn}>
              Купить
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )
}
