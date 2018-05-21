import { compose, withProps } from "recompose"

import reduxStore from "../reduxStore"

import palette from "../palette"
import copy from "../copy"
import firebase from "../firebase"
import Crash from "../atoms/Crash"

import withRedux from "./withRedux"
import withSafeArea from "./withSafeArea"
import withThemeProvider from "./withTheme"
import { withCopyProvider } from "./withCopy"
import withCatch from "./withCatch"

export default compose(
  withProps(firebase),
  withCatch(Crash),
  withRedux(reduxStore),
  withThemeProvider(palette),
  withCopyProvider(copy),
  withSafeArea,
)
