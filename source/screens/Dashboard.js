import React, { Component } from "react"
import styled from "styled-components/native"

import style from "../helpers/getStyle"

const title = "Dashboard"

const Dashboard = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${props => style("background-color", "theme.color.white", props)};
`

const BigText = styled.Text`
  text-align: center;
  ${props => style("color", "theme.color.black", props)};
  ${props => style("font-size", "theme.fontSize.extraLarge", props)};
`

export default class extends Component {
  render = () => (
    <Dashboard>
      <BigText>{title}</BigText>
    </Dashboard>
  )
}
