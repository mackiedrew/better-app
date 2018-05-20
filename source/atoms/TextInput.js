import React, { Component } from "react"
import { pure } from "recompose"
import styled from "styled-components/native"

import style from "../helpers/getStyle"

const Input = styled.TextInput`
  ${props => style("margin", "theme.spacing.medium", props)};
  ${props => style("font-size", "theme.fontSize.large", props)};
  ${props => style("border-radius", "theme.spacing.small", props)};
`

@pure
export default class extends Component {
  static propTypes = {}
  static defaultProps = {}
  render = () => <Input autoCorrect={false} autoCapitalize="none" {...this.props} />
}
