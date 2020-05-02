import React from 'react'

import Separator from '../../../assets/imgs/separator.svg'
import s from './GridItem.module.css'



function Article_1024_1(props) {

    return (
        <div>
            <div className={s.card} style={{width: props.s_width}}>
                <div className={s.img_bg} style={{ backgroundImage: props.bgImg, alignItems: props.s_flex, padding: props.s_0 }}>
                    <div className={s.paramsList} style={{ padding: props.s_20 }}>
                        <div className={s.param}>
                            <div className={s.param_label}>{props.tag1}</div>
                        </div>
                        <div className={s.param}>
                            <div className={s.param_label}>{props.tag2}</div>
                        </div>
                        <div className={s.param}>
                            <div className={s.param_label}>{props.tag3}</div>
                        </div>
                    </div>
                    <div className={s.content} style={{ margin: props.s_margin}}> 
                        <img className={s.separator} src={Separator} style={{ width: props.s_SeparatorW, heigth: props.s_SeparatorH }}alt={"separator"} />
                        <h3 className={s.cardTitle} style={{ fontSize: props.s_fontH3 }}>{props.title}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Article_1024_1
