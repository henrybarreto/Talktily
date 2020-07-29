import React, { Component } from "react"

import LoadingIcon from "./assets/loading-icon.svg"

import "./style.sass"

export default class Loading extends Component
{
    render()
    {
        return (
            <div>
                <div className="loading">
                    <img className="loading__icon" src={LoadingIcon} alt="Loading icon" ></img>
                </div>
            </div>
        )
    }
}