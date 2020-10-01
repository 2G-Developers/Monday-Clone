import React, { Component } from 'react'

import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as FilterIcon} from '../assets/icons/filter.svg';
import {ReactComponent as SlidersIcon} from '../assets/icons/sliders.svg';
import {ReactComponent as ColumnsIcon} from '../assets/icons/columns.svg';

import './Board.scss'

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board__nav">
                    <div className="board__view">Default <ColumnsIcon style={{width: "15", height: "22", marginLeft: ".5rem"}} /></div>
                    <div className="board__interact">
                        <ul>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><SearchIcon style={{width: "15", height: "22", marginRight: ".5rem"}} />Search</a>
                            </li>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><FilterIcon style={{width: "15", height: "22", marginRight: ".5rem"}} />Filter</a>
                            </li>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><SlidersIcon style={{width: "15", height: "22", marginRight: ".5rem"}} />Sort</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="board__workspace"></div>
            </div>
        )
    }
}
