import React from 'react'

import Logo from '../../../assets/imgs/logo.svg'
import Twi from '../../../assets/imgs/TWI.svg'
import VK from '../../../assets/imgs/VK.svg'
import FB from '../../../assets/imgs/FB.svg'
import OK from '../../../assets/imgs/OK.svg'
import INST from '../../../assets/imgs/INST.svg'
import YT from '../../../assets/imgs/YT.svg'


import s from './Logo_social.module.css'

function Logo_social(props) {
    return (
        <div>
            <div className={s.social} style={{ alignItems: props.FlexStart, borderBottom: props.Zero }}>
                <img className={s.logo} src={Logo} alt={"logo"} />
                <div className={s.social_label}>МЫ В СОЦСЕТЯХ</div>
                <div className={s.social_nets} >
                    <img className={s.social_net} style={{ marginLeft: props.Zero }}src={Twi} alt="Twitter"/>
                    <img className={s.social_net} src={VK} alt="VK"/>
                    <img className={s.social_net} src={FB} alt="Facebook"/>
                    <img className={s.social_net} src={OK} alt="Odnoklassniki"/>
                    <img className={s.social_net} style={{display: props.DisplayNone}}src={INST} alt="Instagram"/>
                    <img className={s.social_net} style={{display: props.DisplayNone}}src={YT} alt="YouTube"/>
                </div>
            </div>
        </div>
    )
}

export default Logo_social
