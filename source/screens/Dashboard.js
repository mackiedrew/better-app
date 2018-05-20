import React, { Component } from "react"
import PropTypes from "prop-types"
import { pure } from "recompose"

import Screen from "../templates/Screen"
import Title from "../atoms/Title"
import { withCopy } from "../containers/withCopy"

@withCopy
@pure
export default class extends Component {
  static propTypes = {
    copy: PropTypes.shape({
      title: PropTypes.shape({
        dashboard: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }
  render = () => (
    <Screen>
      <Title>{this.props.copy.title.dashboard}</Title>
    </Screen>
  )
}
