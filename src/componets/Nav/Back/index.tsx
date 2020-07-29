import React, {Component} from "react"
import { Link } from "react-router-dom"

import "../style.sass"

import ArrowUp from "./assests/arrow-up.svg"

interface props
{
    link: string
}

export default class Back extends Component<props>
{
    render()
    {
        return (
           <div>
            <footer className="back nav">
                <div className="back__container">
                    <Link to={this.props.link}><img className="back__arrow" alt="Arrow to back to home page" src={ArrowUp}></img></Link>
                </div>
            </footer>
            </div>
        )
    }
}