import React from 'react';
import module from './Korean.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';
import rice from '../../assets/rice.png';
import shop from '../../assets/shop.png';




function App() {
    return (
    <div className="App">
        <header>
            <nav>
                <img className={module.nav_item} src={logo}></img>
                <div className={module.navCategory}>
                    <div className={module.nav_cat}>категория</div>
                    <div><img className={module.nav_img} src={vector}></img></div>
            </div>
            <a className={module.nav_item} href='#'>О нас</a>
                <div className={module.nav_itemStart}>
                    <div className={module.itemStart}>Начать</div>
                </div>
            </nav>
        </header>

        <div className={module.container_1}>
            <div className={module.block_1}>
                <div className={module.tittle}>Корейская кухня</div>
                <div className={module.info}>
                    совокупность корейских национальных
                    <br /> блюд. Основные блюда — рис, лапша,
                    <br /> супы, закуски, токпокки
                </div>
                <div className={module.bfm}>
                    <div className={module.button}>купить</div>
                    <div className={module.price}>3000 сом за месяц</div>
                </div>
                <div className={module.korzina}>Добавлено в корзину
                    <img className={module.icon} src={shop}></img>
                </div>
            </div>
            <div className={module.block_2}>
                <img className={module.rice} src={rice} alt="" />
            </div>
        </div>

        <div className={module.schedule}>
            утренннее время : 10:00 до 11:00<br />
            вечернее время : 18:00 до 19:00
        </div>
    </div>


    );
}

export default App;