import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

import palette from "../palette"

export default Component => props => (
  <StyledThemeProvider theme={palette}>
    <Component {...props} />
  </StyledThemeProvider>
)
