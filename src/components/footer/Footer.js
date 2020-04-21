import React from 'react'

import LogoSocial from './logo_social/Logo_social'
import SiteMap from './site-map/Sitemap'
import Misprint from './misprint/Misprint'
import Tou from './tou/Tou'

import s from './Footer.module.css'

function Footer() {
    return (
        <div>
            <div className={s.LogoSocial}>
                <LogoSocial></LogoSocial>
            </div>
            
            <SiteMap></SiteMap>
            <Misprint></Misprint>
            <Tou></Tou>
        </div>
    )
}

export default Footer
