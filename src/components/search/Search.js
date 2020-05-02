import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from './../../store/actions'; 

import close from './../../assets/imgs/close.svg';
import s from './Search.module.css';

class Search extends Component {



    render() {
        return (
            <div className={s.componentSearch}>
                <div className={s.search}>
                    <input
                        className={s.input}
                        value={this.props.searchQ}
                        onChange={this.props.newSearch}
                    />

                    <img className={s.closeimg} src={close} alt={"close"} onClick={this.props.clearSearch} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchQ: state.search
    };
}

const mapDispatchToProps = dispatch => {
    return {
        newSearch: (e) => {
            dispatch({ type: actionTypes.FILTER_BY_VALUE, text: e.target.value });
        },
        clearSearch: () => {
            dispatch({type: actionTypes.CLEAR_SEARCH, })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
