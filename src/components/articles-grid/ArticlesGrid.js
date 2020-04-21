import React, { Component } from 'react'

import ArticleWhite from './article_white/ArticleWhite'
import ArticleBlack from './article_black/ArticleBlack'
import CardStats from './cardStats/CardStats'
import Advs from './advs/Advs'

import GridItem from './gridItem/GridItem'


import s from './ArticlesGrid.module.css'


class ArticlesGrid extends Component {


    render() {
        return (
            <div>
                <div className={s.container}>
                    <div className={s.item_1_row_1}>
                        <GridItem
                            tag1="СТАТЬИ"
                            tag2="НОВЕЙШЕЕ ВРЕМЯ"
                            tag3="ЕВРОПА"
                            title="Вытрезвитель — кошмар пролетария"
                            bgImg="url(https://i.ibb.co/pRbJLQz/img-2.png)"
                        />
                    </div>
                    <div className={s.item_2_row_1}>
                        <GridItem
                            tag1="СТАТЬИ"
                            tag2="СРЕДНИЕ ВЕКА"
                            tag3="ЕВРОПА"
                            title="Кристина Шведская: королева, промотавшая королевство"
                            bgImg="url(https://i.ibb.co/YLk3Jtt/img-7.png)"
                        />
                    </div>
                    <div className={s.item_3_row_1}>
                        <GridItem
                            tag1="СТАТЬИ"
                            tag2="СРЕДНИЕ ВЕКА"
                            tag3="ЕВРОПА"
                            title="Как Ельцин хотел забрать Крым"
                            bgImg="url(https://i.ibb.co/Pz1hjB5/img-4.png)"

                            s_1="100%"
                            s_2="flex-start"
                            s_2_2="0"
                            s_3="20px"
                            s_4="0 auto"
                            s_SeparatorW="235px"
                            s_SeparatorH="15px"
                            sTitle_1="30px"
                        />
                    </div>
                    <div className={s.item_1_row_2}>
                        <GridItem
                            tag1="ТЕСТЫ"
                            tag2="НОВОЕ ВРЕМЯ"
                            tag3="АЗИЯ"
                            title="Гражданская война в Камбодже"
                            bgImg="url(https://i.ibb.co/KLwkxCF/img-5.png)"
                        />
                    </div>
                    <div className={s.item_2_row_2}>
                        <ArticleWhite></ArticleWhite>
                    </div>

                    <div className={s.item_3_row_2}>
                        <GridItem
                            tag1="ЕГЭ"
                            tag2="XII ВЕК"
                            tag3="ЮЖНАЯ АМЕРИКА"
                            title="Инки, майя или ацтеки?"
                            bgImg="url(https://i.ibb.co/NnTvzw0/img-6.png.jpg)"
                        />
                    </div>

                    <div className={s.item_4_row_2}>
                        <GridItem
                            tag1="Тесты"
                            tag2="Новое время"
                            tag3="АЗИЯ"
                            title="Гражданская война в Камбодже"
                            bgImg="url(https://i.ibb.co/KLwkxCF/img-5.png)"
                        />
                    </div>
                </div>

                <div className={s.mobile_only}>
                    <ArticleWhite />
                    <ArticleBlack />
                    <ArticleWhite />
                </div>
                
                <Advs></Advs>


                <div className={s.container_2}>
                    <div className={s.c2_item_1_row_1}>
                        <GridItem
                            tag1="ТЕСТЫ"
                            tag2="НОВОЕ ВРЕМЯ"
                            tag3="АЗИЯ"
                            title="Гражданская война в Камбодже"
                            bgImg="url(https://i.ibb.co/KLwkxCF/img-5.png)"
                        />
                    </div>
                    <div className={s.c2_item_2_row_1}>
                        <ArticleWhite></ArticleWhite>
                    </div>
                    <div className={s.c2_item_3_row_1}>
                        <GridItem
                            tag1="ЕГЭ"
                            tag2="XII ВЕК"
                            tag3="ЮЖНАЯ АМЕРИКА"
                            title="Инки, майя или ацтеки?"
                            bgImg="url(https://i.ibb.co/NnTvzw0/img-6.png.jpg)"
                        />
                    </div>
                    <div className={s.c2_item_4_row_1}>
                        <GridItem
                            tag1="Тесты"
                            tag2="Новое время"
                            tag3="АЗИЯ"
                            title="Гражданская война в Камбодже"
                            bgImg="url(https://i.ibb.co/KLwkxCF/img-5.png)"
                        />
                    </div>
                </div>
                <div className={s.mobile_only}>
                    <ArticleWhite/>
                    <ArticleBlack/>
                    <ArticleWhite/>
                </div>

                <CardStats></CardStats>

            </div>
        )
    }
}

export default ArticlesGrid
