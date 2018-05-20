import { compose } from "recompose"

import reduxStore from "../reduxStore"

import palette from "../palette"

import withRedux from "./withRedux"
import withSafeArea from "./withSafeArea"
import withTheme from "./withTheme"

export default compose(withRedux(reduxStore), withTheme(palette), withSafeArea)
