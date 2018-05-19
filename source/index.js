import { Component } from "react"
import { Navigation } from "react-native-navigation"

import Dashboard from "./screens/Dashboard"

export const App = class extends Component {
  constructor(props) {
    super(props)
    Navigation.registerComponent("better-app.dashboard", () => Dashboard)
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Dashboard",
          title: "Dashboard",
          screen: "better-app.dashboard",
          // eslint-disable-next-line import/no-unresolved
          icon: require("../assets/icons/dashboard.png"),
        },
        {
          label: "Settings",
          title: "Settings",
          screen: "better-app.dashboard",
          // eslint-disable-next-line import/no-unresolved
          icon: require("../assets/icons/settings.png"),
        },
      ],
    })
  }
}

export default new App()
