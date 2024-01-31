import React from 'react'
import style from './header.module.scss'
import logo from '../../assets/logo.svg'

export const Header = () => {
    return (
        <header>
            <div className={style.top_header}>
                <div className="container">
                    <div className={style.top_header__container}>
                        <a href="#" className={style.logo_block}>
                            <img src={logo} alt="logo" />
                            <p className={style.logo_text}>
                                Колбасы и мясные деликатесы
                            </p>
                        </a>
                        <div className={style.header__cart__block}>
                            <a className={style.star_icon} href=""></a>
                            <a className={style.cart_icon} href=""></a>
                            <div className={style.cart_info}>
                                <p className={style.cart_info__text}>Товаров: <span>6</span></p>
                                <strong className={style.price}>6 540 ₽</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottom_header}>
                <div className="container">
                    <div className={style.bottom_header__container}>
                        <button className={style.menu_btn}></button>
                        <ul className={style.navbar_list}>
                            <li className={style.navbar_item}>
                                <a href="" className={style.navbar_link}>О ресноте</a>
                            </li>
                            <li className={style.navbar_item}>
                                <a href="" className={style.navbar_link}>Каталог</a>
                            </li>
                            <li className={style.navbar_item}>
                                <a href="" className={style.navbar_link}>Наши магазины</a>
                            </li>
                            <li className={style.navbar_item}>
                                <a href="" className={style.navbar_link}>Контакты</a>
                            </li>
                        </ul>
                        <div className={style.search_block}>
                            <input className={style.search_input} placeholder='Поиск по сайту' type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
