import React, { Component } from 'react'

import { connect } from 'react-redux'

import CardStats from './cardStats/CardStats'
import Advs from './advs/Advs'
import GridItem from './gridItem/GridItem'
import s from './ArticlesGrid.module.css'


class ArticlesGrid extends Component {




    render() {
        let articles = this.props.articles;
        let search = this.props.search; 
        let what = this.props.whatFilter;
        let when = this.props.whenFilter;
        let where = this.props.whereFilter;


        let filterBySearch = articles.filter(article => {
            return article.title.toLowerCase().includes(search.toLowerCase());
        })

        let filteredByWhat = filterBySearch.filter(article => {
            return article.tag1.toLowerCase().includes(what.toLowerCase());
        });
        let filteredByWhere = filteredByWhat.filter(article => {
            return article.tag2.toLowerCase().includes(when.toLowerCase());
        });
        let filteredByWhen = filteredByWhere.filter(article => {
            return article.tag3.toLowerCase().includes(where.toLowerCase());
        });

        return (
            <div>
                <div className={s.article_wrapper}>
                    <div className={s.container}>

                        {filteredByWhen.map(article => {
                            return <GridItem
                                key={article.id}
                                tag1={article.tag1}
                                tag2={article.tag2}
                                tag3={article.tag3}
                                title={article.title}
                                bgImg={article.bgImg}

                                s_width={article.s_width}
                                s_flex={article.s_flex}
                                s_0={article.s_0}
                                s_20={article.s_20}
                                s_margin={article.s_margin}
                                s_SeparatorW={article.s_SeparatorW}
                                s_SeparatorH={article.s_SeparatorH}
                                s_fontH3={article.s_fontH3}
                            />
                        })}
                    </div>
                </div>


                <CardStats></CardStats>
                <Advs></Advs>


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        search: state.search,
        articles: state.articles,
        whatFilter: state.filterWhat,
        whenFilter: state.filterWhen,
        whereFilter: state.filterWhere
    };
};


export default connect(mapStateToProps)(ArticlesGrid);
