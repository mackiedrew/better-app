import { compose } from "recompose"

import reduxStore from "../reduxStore"

import palette from "../palette"
import copy from "../copy"

import withRedux from "./withRedux"
import withSafeArea from "./withSafeArea"
import withThemeProvider from "./withTheme"
import { withCopyProvider } from "./withCopy"

export default compose(
  withRedux(reduxStore),
  withThemeProvider(palette),
  withCopyProvider(copy),
  withSafeArea,
)
