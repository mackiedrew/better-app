import React, { Component } from "react"
import { pure } from "recompose"

import Screen from "../templates/Screen"
import Title from "../atoms/Title"

const title = "Dashboard"

@pure
export default class extends Component {
  render = () => (
    <Screen>
      <Title>{title}</Title>
    </Screen>
  )
}
