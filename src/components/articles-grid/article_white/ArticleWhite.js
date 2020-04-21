import React from 'react'

import cardImg from '../../../assets/imgs/img-1.png'
import Books from '../../../assets/imgs/books.png'
import Eyes from '../../../assets/imgs/eyes.png'
import Hoursand from '../../../assets/imgs/hoursand.png'
import s from './ArticleWhite.module.css'

function ArticleWhite() {
    return (
        <div>
            <div className={s.card}>
                <img className={s.cardImg} src={cardImg} alt={"Illustration"} /> 
                <div className={s.content}>
                    <div className={s.paramsList}>
                        <div className={s.param}>
                            <img className={s.paramImg} src={Books} alt={"param"} /> 
                            <div className={s.param_label}>СТАТЬИ</div>
                        </div>
                        <div className={s.param}>
                            <img className={s.paramImg} src={Eyes} alt={"param"} /> 
                            <div className={s.param_label}>12010</div>                       
                        </div>
                        <div className={s.param}>
                            <img className={s.paramImg} src={Hoursand} alt={"param"} /> 
                            <div className={s.param_label}>15 МИНУТ</div> 
                        </div>
                    </div>
                    <h3 className={s.card_h3}>Машина времени</h3>
                    <p className={s.card_p}>В истории немало знаковых, переломных и важных годов. И немало людей, которые с удовольствием отправились бы в прошлое, если бы могли.</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleWhite
