import React, {Component} from "react"
import { Link } from "react-router-dom"

import "../style.sass"

import ArrowDown from "./assests/arrow-down.svg"

interface props
{
    link: string
}

export default class Next extends Component<props>
{
    render()
    {
        return (
            <div>
            <footer className="next nav">
                    <div className="next__text__container">
                        <span className="next__text">Do you like this?</span>
                    </div>
                    <div className="next__arrow__container">
                        <Link to={this.props.link}><img className="next__arrow"  alt="Arrow to enter" src={ArrowDown}></img></Link>
                    </div>
            </footer>
            </div>
        )
    }
}