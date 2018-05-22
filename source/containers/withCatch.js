import React, { Component } from "react"

import { crashlytics } from "../firebase"

export default (ErrorComponent, errorMessage) => Child =>
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hasError: false,
        errorObject: null,
        errorInfo: null,
      }
    }
    componentDidCatch = (error, info) => {
      crashlytics.log(error)
      crashlytics.log(info)
      crashlytics.recordError(1, "withCatch")
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
