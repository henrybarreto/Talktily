import React, { Component } from "react"

import "./style.sass"

export default class Presentation extends Component
{
    render()
    {
        return (
            <div className="presentation">
                <p className="presentation__text text">
                    Talk with strangers. <span className="presentation__text--normal">Safe</span> & <span className="presentation__text--normal">anonymously </span>
                </p>
            </div>
        )
    }
}