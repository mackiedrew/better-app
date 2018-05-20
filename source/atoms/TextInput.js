import React, { Component } from "react"
import { pure } from "recompose"
import styled from "styled-components/native"

import style from "../helpers/getStyle"

const Input = styled.TextInput`
  ${props => style("border-bottom-width", "theme.divider", props)};
  ${props => style("border-bottom-color", "theme.color.black", props)};
  ${props => style("padding", "theme.spacing.small", props)};
  ${props => style("margin", "theme.spacing.small", props)};
  ${props => style("font-family", "theme.fontFamily.body.regular", props)};
  ${props => style("font-size", "theme.fontSize.large", props)};
`

@pure
export default class extends Component {
  static propTypes = {}
  static defaultProps = {}
  render = () => (
    <Input
      underlineColorAndroid="transparent"
      autoCorrect={false}
      autoCapitalize="none"
      {...this.props}
    />
  )
}
