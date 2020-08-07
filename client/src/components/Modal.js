import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = props => {
    return ReactDOM.createPortal(
        // ((This div))
        <div
            onClick={props.onDismiss}
            className="ui dimmer modals visible active">
            {/* Background: When I click anywhere other than buttons it cancels */}
            {/* Purpose of "onClick" Method: */}
            {/* When I click outside of the div it switches to another page */}
            {/* When I click inside the div it doesn't cancel */}
            {/* Technically:  */}
            {/* we use stopPropagation method so it doesn't not bubble up to
             the ((this div)) */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal