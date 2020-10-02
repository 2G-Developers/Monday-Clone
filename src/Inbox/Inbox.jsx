import React, { Component } from 'react'
import './Inbox.scss'

export default class Inbox extends Component {
    render() {
        return (
            <div className="inbox">
            <div className="inbox__title">Inbox View Options</div>
            <div className="inbox__input">
                <div className="inbox__input-group">
                    <input type="radio" id="update" name="inbox" value="update" />
                    <label for="update">Inbox Updates</label>
                </div>
                <div className="inbox__input-group">
                    <input type="radio" id="mention" name="inbox" value="mention" />
                    <label for="mention">I was Mentioned</label>
                </div>
                <div className="inbox__input-group">
                    <input type="radio" id="office" name="inbox" value="office" />
                    <label for="office">All Updates of Google</label>
                </div>
                <div className="inbox__input-group">
                    <input type="radio" id="bookmark" name="inbox" value="bookmark" />
                    <label for="bookmark">Bookmarked Updates</label>
                </div>
            </div>
        </div>
        )
    }
}
