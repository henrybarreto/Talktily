import React, { Component } from "react";
import Loading from "../../componets/Loading";
import { connect } from "react-redux";

class Lobby extends Component
{
  constructor(props: any)
  {
    super(props)
  }

  render()
  {
    return(
      <Loading />
    )
  }
}

export default connect(state => state)(Lobby)