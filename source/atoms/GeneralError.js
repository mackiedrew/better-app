import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"

import style from "../helpers/getStyle"
import { withCopy } from "../containers/withCopy"

const ErrorMessage = styled.Text`
  flex: 1;
  text-align: center;
  overflow: hidden;
  ${props => style("padding", "theme.spacing.large", props)};
  ${props => style("background-color", "theme.color.error", props)};
  ${props => style("border-radius", "theme.roundCorners", props)};
  ${props => style("color", "theme.color.white", props)};
  ${props => style("font-family", "theme.fontFamily.body.extraBold", props)};
  ${props => style("font-size", "theme.fontSize.extraLarge", props)};
`

@withCopy
export default class extends Component {
  static propTypes = {
    copy: PropTypes.shape({
      generalError: PropTypes.string.isRequired,
    }).isRequired,
    errorMessage: PropTypes.string,
  }
  static defaultProps = {
    copy: {
      basicCrash: "",
    },
  }
  render = () => (
    <ErrorMessage>
      {this.props.errorMessage ? this.props.errorMessage : this.props.copy.generalError}
    </ErrorMessage>
  )
}
