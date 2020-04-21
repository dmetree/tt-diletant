import React from 'react'

import AgeControl from '../../../assets/imgs/12+.svg'

import s from './Tou.module.css'

function Tou() {
    return (
        <div>
            <div className={s.tou}>
                <div className={s.row1}>
                    <div className={s.reg}>Свидетельство о регистрации СМИ Эл №ФС77-62623 выдано федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) 31.07.2015 При полном или частичном использовании материалов ссылка на «Дилетант» обязательна. Для сетевых изданий обязательна гиперссылка на сайт «Дилетант» — diletant.media.</div>
                    <img className={s.row1_ageControl} src={AgeControl} alt={"ageControl"} />
                </div>
                
            
                <div className={s.row2}>
                    <div className={s.chief}>Главный редактор: Алексей Соломин</div>
                    <img className={s.row2_ageControl} src={AgeControl} alt={"ageControl"} />
                </div>
                
                
            </div>
        </div>
    )
}

export default Tou
