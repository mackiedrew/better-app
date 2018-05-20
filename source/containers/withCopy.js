import React, { PureComponent } from "react"
import PropTypes from "prop-types"

const { Consumer: CopyConsumer, Provider: CopyProvider } = React.createContext({})

const withCopyProvider = copy => Component => props => (
  <CopyProvider value={copy}>
    <Component {...props} />
  </CopyProvider>
)

const withCopy = Component => {
  class CopyComponent extends PureComponent {
    static propTypes = {
      forwardedRef: PropTypes.any,
    }
    render = () => {
      const { forwardedRef, ...rest } = this.props
      return (
        <CopyConsumer>
          {consumable => <Component {...rest} ref={forwardedRef} copy={consumable} />}
        </CopyConsumer>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <CopyComponent {...props} forwardedRef={ref} />
  })
}

export { withCopyProvider, withCopy, CopyProvider, CopyConsumer }
