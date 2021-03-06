import { PureComponent } from "react"
import PropTypes from "prop-types"
import { Navigation } from "react-native-navigation"

import withProviders from "./containers/withProviders"

import screens from "./screens"

export class App extends PureComponent {
  static propTypes = { screens: PropTypes.object }
  static defaultProps = { screens: [] }
  constructor(props) {
    super(props)
    this.registerScreens(this.props.screens)
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Dashboard",
          title: "Dashboard",
          screen: "better-app.dashboard",
          // eslint-disable-next-line import/no-unresolved
          icon: require("../assets/icons/dashboard.png"),
          navigatorStyle: { navBarHidden: true },
        },
        {
          label: "Settings",
          title: "Settings",
          screen: "better-app.settings",
          // eslint-disable-next-line import/no-unresolved
          icon: require("../assets/icons/settings.png"),
          navigatorStyle: { navBarHidden: true },
        },
      ],
      appStyle: {
        forceTitlesDisplay: true,
      },
    })
  }
  registerScreens = screensToRegister =>
    Object.entries(screensToRegister).forEach(([key, Screen]) =>
      Navigation.registerComponent(key, () => withProviders(Screen)),
    )
}

export default new App({ screens })
