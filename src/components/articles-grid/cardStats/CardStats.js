import React from 'react'
import s from './CardStats.module.css'

function CardStats() {
    return (
        <div>
            <div className={s.cs}>
                <div className={s.cs_info}>ПОКАЗАНО 12 ИЗ 2600 КАРТОЧЕК</div>
                <button className={s.cs_btn}>БОЛЬШЕ МАТЕРИАЛОВ</button>
            </div>
        </div>
    )
}

export default CardStats
