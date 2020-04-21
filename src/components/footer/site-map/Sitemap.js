import React from 'react'

import Books from '../../../assets/imgs/books.png'
import Page from '../../../assets/imgs/page.png'
import Crown from '../../../assets/imgs/crown.png'
import Book from '../../../assets/imgs/book.png'

import LogoSocial from './../logo_social/Logo_social'

import s from './Sitemap.module.css'

function Sitemap() {
    return (
        <div>
            <div className={s.sitemap}>
                <div className={s.col_0}>
                    <LogoSocial
                        FlexStart= "flex-start"
                        DisplayNone="none"
                        Zero="0"
                    />
                   
                </div>
                <div className={s.col_1}>
                    <div className={s.prox_n_caps_h3}>РУБРИКАТОР</div>
                    <a className={s.col_item} href="../">
                        <img className={s.books} src={Books} alt={"books"} />сборники
                    </a>
                    <a className={s.col_item} href="../">
                        <img className={s.page} src={Page} alt={"page"} />статьи
                    </a>
                    <a className={s.col_item} href="../">
                        <img className={s.crown} src={Crown} alt={"crown"} />тесты
                    </a>
                    <a className={s.col_item} href="../">
                        <img className={s.book} src={Book} alt={"book"} />журнал
                    </a>
                </div>

                <div className={s.col_2}>
                    <div className={s.prox_n_caps_h3}>ИНФО</div>
                    <a className={s.col_item} href="../">правила комментирования</a>
                    <a className={s.col_item} href="../">cookie policy / GDPR</a>
                    <a className={s.col_item} href="../">реклама на сайте</a>
                </div>

                <div className={s.col_3}>
                    <div className={s.prox_n_caps_h3}>КОНТАКТЫ</div>
                    <div className={s.col_3_item}>
                        <div className={s.col_item_label}>по вопросам подписки</div>
                        <a className={s.sitemap_email} href="mailto:podpiska@diletant.media">podpiska@diletant.media</a>
                    </div>

                    <div className={s.col_3_item}>
                        <div className={s.col_item_label}>по общим вопросам</div>
                        <a className={s.sitemap_email} href="mailto:info@diletnant.media">info@diletnant.media</a>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Sitemap
