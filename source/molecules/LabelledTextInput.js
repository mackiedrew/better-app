import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { pure } from "recompose"
import styled from "styled-components/native"

import style from "../helpers/getStyle"

import Label from "../atoms/Label"
import TextInput from "../atoms/TextInput"

const PaddedTextInput = styled(TextInput)`
  ${props => style("margin-bottom", "theme.spacing.extraLarge", props)};
`

@pure
export default class extends Component {
  static propTypes = {
    label: PropTypes.string,
  }
  static defaultProps = {}
  render = () => {
    const { label, ...inputProps } = this.props
    return (
      <Fragment>
        {label ? <Label>{label}</Label> : null}
        <PaddedTextInput {...inputProps} />
      </Fragment>
    )
  }
}
