import React, { Component } from 'react'
import { connect } from 'react-redux'
import dropDown from './../../assets/imgs/arrow-d.svg'
import filter from './../../assets/imgs/filter.svg'
import s from './Filter.module.css';
import * as actionTypes from './../../store/actions'; 

class Filter extends Component {

    render() {
        return (
            <div className={s.filter}>
                <div className={s.filterwrapper}>
                    <div className={s.filter_elements}>

                        <div className={s.filterRight}>
                            <div className={s.filterDrop + ' ' + s.filterFirstItem}>
                                <div className={s.filterLabel + ' ' + s.filterFirstItemLabel}>Сортировка</div>
                                <img className={s.dropDownImg + ' ' + s.filterFirstItemImg} src={dropDown} alt={"dropdown"} />
                            </div>
                            <div className={s.filterDrop + ' ' + s.filter_new}>
                                <div className={s.filterLabel + ' ' + s.filterLabelNew}>Новое</div>
                                <svg className={s.dropDownImg} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9.89949L9.94975 4.94975H0.0502526L5 9.89949Z" fill="#ffffff" />
                                </svg>
                            </div>
                        </div>



                        <div className={s.filters_1024}>
                            <div className={s.filterDrop}>
                                {console.log()}
                                <select className={s.filterLabel}
                                    onChange={this.props.selectWhatValue}>
                                    <option value="">Все</option>
                                    <option value="Статьи">Стати</option>
                                    <option value="Тесты">Тесты</option>
                                    <option value="Сборники">Сборники</option>
                                </select>
                                <img className={s.dropDownImg} src={dropDown} alt={"dropdown"} />
                            </div>
                            <div className={s.filterDrop}>

                                <select className={s.filterLabel}
                                    onChange={this.props.selectWhereValue}>
                                    <option value="">Где?</option>
                                    <option value="ЕВРОПА">Европа</option>
                                    <option value="АЗИЯ">Азия</option>
                                    <option value="АМЕРИКА">Америка</option>
                                </select>
                                <img className={s.dropDownImg} src={dropDown} alt={"dropdown"} />
                            </div>
                            <div className={s.filterDrop}>
                                <select className={s.filterLabel}
                                    onChange={this.props.selectWhenValue}>
                                    <option value="">Когда?</option>
                                    <option value="bc">до VIII до н.э.Древний мир</option>
                                    <option value="Middle">V-XIV в Средневековье</option>
                                </select>
                                <img className={s.dropDownImg} src={dropDown} alt={"dropdown"} />
                            </div>
                        </div>

                        <img className={s.filterImg} src={filter} alt={"filter"} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        whatValue: state.filterWhat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectWhatValue: (e) => {
            dispatch({ type: actionTypes.FILTER_BY_WHAT, whatValue: e.target.value });
        },
        selectWhereValue: (e) => {
            dispatch({ type: actionTypes.FILTER_BY_WHERE, whereValue: e.target.value });
        },
        selectWhenValue: (e) => {
            dispatch({ type: actionTypes.FILTER_BY_WHEN, whenValue: e.target.value });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
