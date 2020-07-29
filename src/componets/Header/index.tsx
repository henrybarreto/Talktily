import React, {Component} from "react"
import "./style.sass"

export default class Header extends Component
{
    render()
    {
        return(
            <header className="header">
                    <span className="header__logo"> 
                        Talktily
                    </span>
            </header>
        );
    }
}