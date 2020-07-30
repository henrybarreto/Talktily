import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loading from "../../componets/Loading";

interface IProps
{
  username: string,
  yn: boolean,
  terms: boolean,
  dispatch: Function
}

class Lobby extends Component<IProps>
{
  constructor(props: IProps)
  {
    super(props)

  }

  render()
  {
    return (this.props.username && this.props.yn && this.props.terms) ? ( 
    <Loading /> ) : (
    <Redirect to="/" /> )
  }
}

export default connect(state => state)(Lobby)