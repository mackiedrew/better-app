import React, { Component } from "react"
import { pure, compose } from "recompose"
import PropTypes from "prop-types"

import { withCopy } from "../containers/withCopy"

import Screen from "../templates/Screen"
import Title from "../atoms/Title"
import LabelledTextInput from "../molecules/LabelledTextInput"

export default compose(pure, withCopy)(
  class extends Component {
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
        <LabelledTextInput label="User Name" />
        <LabelledTextInput label="Password" />
      </Screen>
    )
  },
)
