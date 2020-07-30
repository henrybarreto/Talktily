import React, {Component, FormEvent, Props} from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { actionEnter } from "../../store/actions"

import "./style.sass"

interface IProps
{
    dispatch: Function
}

interface IState
{
    username: string,
    yn: boolean,
    terms: boolean,
    submit: boolean
}

class Form extends Component<IProps, IState>
{
    constructor(props: any)
    {
        super(props)

        this.state = { username: "", yn: false, terms: false, submit: false }

        console.log(props)

        this.formHandler = this.formHandler.bind(this)
        this.usernameValidation = this.usernameValidation.bind(this)
        this.ynValidation = this.ynValidation.bind(this)
        this.termsValidation = this.termsValidation.bind(this)
    }

    /*componentDidUpdate()
    {
        //console.log(this.state)
    }*/

    usernameValidation(event: any)
    {
        const data = event.target
        this.setState(
                {username: data.value}
            )
    }
    ynValidation(event: any)
    {
        const yn = event.target
        if( yn.value === "no" )
        {
            this.setState(
                    {yn: false}
                )
        } else if ( yn.value === "yes" )
        {
            this.setState(
                    {yn: true}
                )
        } else 
        {
            this.setState({yn: false})
        }
    }
    termsValidation(event: any)
    {
        const checkbox = event.target
        this.setState(
                {terms: checkbox.checked}
            )
    }

    formHandler(event: FormEvent)
    {
        event.preventDefault()

        this.props.dispatch(actionEnter(this.state.username, this.state.yn, this.state.terms))
        this.setState({submit: true})
    } 
    
    render()
    {
        return (this.state.submit === false) ? (
        <form className="form" onSubmit={this.formHandler} > 
                <div className="form__name form__item">
                    <label className="form__label form__label--text" htmlFor="username"> How do you want to be called?</label>
                    <input className="form__input form__input--text" id="username" name="username" type="text"  onChange={this.usernameValidation} />
                </div>
                <div className="form__yn form__item">
                    <label className="form__label--age">Are you older than 18?</label>
                    <div className="form__yn__area">
                        <input className="form__input form__input--radius" id="yes" name="yn" type="radio" value="yes" onClick={this.ynValidation} />
                        <label className="form__label--radius" htmlFor="yes">Yes</label>
                        <input className="form__input form__input--radius" id="no" name="yn" type="radio" value="no" onClick={this.ynValidation} />
                        <label className="form__label--radius" htmlFor="no">No</label>
                    </div>
                </div>
                <div className="form__terms form__item">
                    <input className="form__input form__input--checkbox" id="terms" name="terms" type="checkbox" onClick={this.termsValidation} ></input>
                    <label className="form__label form__label--checkbox" htmlFor="terms" >I've readed and acceped all term</label>
                </ div>
                <div className="form__confirmation">
                    <input className="form__input form__input--main-button" type="submit" value="Enter" />
                </ div>
        </form> ) : ( <Redirect to="/lobby" /> )
    }
}

export default connect(state => state)(Form)