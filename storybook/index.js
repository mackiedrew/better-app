import React, { Component } from "react"
import { getStorybookUI, configure } from "@storybook/react-native"
import { Navigation } from "react-native-navigation"

// Create UI
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true })

// React Native mount point requires a class not a stateless function
class StorybookUIHMRRoot extends Component {
  render = () => <StorybookUIRoot />
}

configure(() => require("./stories/"), module)

Navigation.registerComponent("better-app.storybook", () => StorybookUIHMRRoot)
Navigation.startSingleScreenApp({
  screen: {
    screen: "better-app.storybook",
    navigatorStyle: { navBarHidden: true },
  },
})
