import React, { PureComponent } from "react"
import PropTypes from "prop-types"

export default Child =>
  class extends PureComponent {
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
    componentDidCatch = (error, info) => {
      this.props.crashlytics.log(error)
      this.props.crashlytics.log(info)
      this.props.crashlytics.recordError(1, "withCatch")
    }
    render = () => <Child {...this.props} />
  }
