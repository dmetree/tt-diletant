import React from 'react'

import AdvsImgMobile from '../../../assets/imgs/add_mob.png'
import AdvsImgTablet from '../../../assets/imgs/add_tablet.png'

import s from './Advs.module.css'

function Advs() {
    return (

        <div className={s.advs_container}>
            <p className={s.advs_p}>реклама на diletant.media</p>
            <img className={s.advs_img_mobile} src={AdvsImgMobile} alt={"advs"} />
            <img className={s.advs_img_tablet} src={AdvsImgTablet} alt={"advs"} />
        </div>

    )
}

export default Advs
