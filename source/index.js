/* @flow */
import { Component } from "react"
import { AppRegistry } from "react-native"

import Dashboard from "./screens/Dashboard"

type Props = {}
export const App = class extends Component<Props> {
  constructor(props) {
    super(props)
    AppRegistry.registerComponent("BetterApp", () => Dashboard)
  }
}

export default new App()
