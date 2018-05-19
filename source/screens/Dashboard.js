/* @flow */
import React, { Component } from "react"
import styled from "styled-components/native"

const title = "Dashboard"

const Dashboard = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`

const BigText = styled.Text`
  text-align: center;
  color: #333333;
  font-size: 20px;
  margin-bottom: 5px;
`

type Props = {}
export default class extends Component<Props> {
  render = () => (
    <Dashboard>
      <BigText>{title}</BigText>
    </Dashboard>
  )
}
