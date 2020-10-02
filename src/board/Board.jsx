import React, { Component } from 'react'

import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as FilterIcon} from '../assets/icons/filter.svg';
import {ReactComponent as SlidersIcon} from '../assets/icons/sliders.svg';
import {ReactComponent as ColumnsIcon} from '../assets/icons/columns.svg';


import './Board.scss';
import Draggable from '../drag/drag';
import Contact from '../Contact/Contact';
import ProfileCard from '../ProfileCard/ProfileCard';
import Inbox from '../Inbox/Inbox';

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="board__nav">
                    <div className="board__view">Default <ColumnsIcon style={{strokeWidth: "1",width: "1.5625rem", height: "1.375rem", marginLeft: ".5rem", stroke: "#323338"}} /></div>
                    <div className="board__interact">
                        <ul>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><SearchIcon style={{strokeWidth: "1",width: ".9375rem", height: "1.375rem", marginRight: ".5rem"}} />Search</a>
                            </li>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><FilterIcon style={{strokeWidth: "1",width: ".9375rem", height: "1.375rem", marginRight: ".5rem"}} />Filter</a>
                            </li>
                            <li className="board__item">
                                <a href="index.html" className="board__link"><SlidersIcon style={{strokeWidth: "1",width: ".9375rem", height: "1.375rem", marginRight: ".5rem"}} />Sort</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="board__workspace">
                    <div className="board__wrapper">
                        <Contact />
                        <div className="side__card">
                            <ProfileCard />

                            <Inbox />
                        </div>
                    </div>
                    
                    <Draggable />
                </div>
            </div>
        )
    }
}
