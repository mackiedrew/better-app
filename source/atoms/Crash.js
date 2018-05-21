import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"

import style from "../helpers/getStyle"
import { withCopy } from "../containers/withCopy"

const CrashMessage = styled.Text`
  flex: 1;
  width: 100%;
  height: 100%;
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
      basicCrash: PropTypes.string.isRequired,
    }).isRequired,
  }
  static defaultProps = {
    copy: {
      basicCrash: "",
    },
  }
  render = () => <CrashMessage>{this.props.copy.basicCrash}</CrashMessage>
}
