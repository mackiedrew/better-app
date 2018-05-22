import { compose } from "recompose"

import reduxStore from "../reduxStore"

import palette from "../palette"
import copy from "../copy"
import GeneralError from "../atoms/GeneralError"

import withRedux from "./withRedux"
import withSafeArea from "./withSafeArea"
import withThemeProvider from "./withTheme"
import { withCopyProvider } from "./withCopy"
import withCatch from "./withCatch"

export default compose(
  withCatch(GeneralError),
  withRedux(reduxStore),
  withThemeProvider(palette),
  withCopyProvider(copy),
  withSafeArea,
)
