import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

export default palette => Component => props => (
  <StyledThemeProvider theme={palette}>
    <Component {...props} />
  </StyledThemeProvider>
)
