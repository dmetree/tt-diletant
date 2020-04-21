import React from 'react'
import dropDown from './../../assets/imgs/arrow-d.svg'
import filter from './../../assets/imgs/filter.svg'
import s from './Filter.module.css';

function Filter() {


    return (
        <div className={s.filter}>
            <div className={s.filterwrapper}>
                <div className={s.filter_elements}>

                    <div className={s.filterRight}>
                        <div className={s.filterDrop + ' ' + s.filterFirstItem}>
                            <div className={s.filterLabel + ' ' + s.filterFirstItemLabel}>Сортировка</div>
                            <img className={s.dropDownImg + ' ' + s.filterFirstItemImg } src={dropDown} alt={"dropdown"} />
                        </div>
                        <div className={s.filterDrop + ' ' + s.filter_new}>
                            <div className={s.filterLabel +' '+ s.filterLabelNew}>Новое</div>
                            <svg className={s.dropDownImg} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 9.89949L9.94975 4.94975H0.0502526L5 9.89949Z" fill="#ffffff" />
                            </svg>
                        </div>
                    </div>



                    <div className={s.filters_1024}>
                        <div className={s.filterDrop}>
                            <div className={s.filterLabel}>Что</div>
                            <img className={s.dropDownImg} src={dropDown} alt={"dropdown"} />
                        </div>
                        <div className={s.filterDrop}>
                            <div className={s.filterLabel}>Где</div>
                            <img className={s.dropDownImg} src={dropDown} alt={"dropdown"} />
                        </div>
                        <div className={s.filterDrop}>
                            <div className={s.filterLabel}>Когда</div>
                            <img className={s.dropDownImg} src={dropDown} alt={"dropdown"} />
                        </div>
                    </div>

                    <img className={s.filterImg} src={filter} alt={"filter"} />
                </div>
            </div>
        </div>
    )
}

export default Filter
