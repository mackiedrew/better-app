import React, { Component } from "react"
import PropTypes from "prop-types"

export default (ErrorComponent, errorMessage) => Child =>
  class extends Component {
    static propTypes = {
      crashlytics: PropTypes.shape({
        log: PropTypes.func.isRequired,
        recordError: PropTypes.func.isRequired,
      }).isRequired,
    }
    static defaultProps = {
      crashlytics: {
        log: Function.prototype,
        recordError: Function.prototype,
      },
    }
    constructor(props) {
      super(props)
      this.state = {
        hasError: false,
        errorObject: null,
        errorInfo: null,
      }
    }
    componentDidCatch = (error, info) => {
      this.props.crashlytics.log(error)
      this.props.crashlytics.log(info)
      this.props.crashlytics.recordError(1, "withCatch")
      /* eslint-disable-next-line react/no-set-state */
      this.setState(() => ({
        hasError: true,
        errorObject: null,
        errorInfo: null,
      }))
    }
    render = () =>
      this.state.hasError ? (
        <ErrorComponent errorMessage={errorMessage} {...this.state} {...this.props} />
      ) : (
        <Child {...this.props} />
      )
  }
