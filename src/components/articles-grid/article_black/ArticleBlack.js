import React from 'react'


import Books from '../../../assets/imgs/books.png'
import Eyes from '../../../assets/imgs/eyes.png'
import Hoursand from '../../../assets/imgs/hoursand.png'
import Separator from '../../../assets/imgs/separator_mobile.svg'

import s from './ArticleBlack.module.css'

function ArticleBlack() {
    return (
        <div>
            <div className={s.card}>
                <div className={s.img_bg}>
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
                    <h3 className={s.cardB_h3}>Вытрезвитель — кошмар пролетария</h3>
                </div>
                <div className={s.content}>
                    <img className={s.separator} src={Separator} alt={"separator"} />
                    <p className={s.content_black}>Культура пития существовала в России испокон веков, а вот культура «государственного» вытрезвления появилась только в начале XX века. Во сколько обходилась ночь в таком учреждении и почему многие жители СССР боялись туда попасть?</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleBlack
