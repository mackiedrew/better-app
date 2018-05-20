import React from "react"
import { ThemeProvider } from "styled-components"

import { CopyProvider } from "../source/containers/withCopy"
import copy from "../source/copy"
import palette from "../source/palette"

const ContextProviders = props => (
  <CopyProvider value={copy}>
    <ThemeProvider theme={palette}>{props.children}</ThemeProvider>
  </CopyProvider>
)

const withContextProviders = Component => props => (
  <ContextProviders>
    <Component {...props} />
  </ContextProviders>
)

export { ContextProviders, withContextProviders }
