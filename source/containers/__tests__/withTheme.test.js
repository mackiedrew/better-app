import React, { Component } from "react"
import { Text, View } from "react-native"
import { withTheme } from "styled-components"
import Renderer from "react-test-renderer"

import palette from "../../palette"
import withThemeProvider from "../withTheme"

const ParentComponent = props => <View>{props.children}</View>

class TestComponent extends Component {
  render = () => <Text>Test</Text>
}

describe("withTheme", () => {
  it("works with a passed theme", () => {
    const ThemeProvider = withThemeProvider(ParentComponent)
    const ThemeConsumer = withTheme(TestComponent)
    const result = Renderer.create(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    )
    const { instance: testComponentInstance } = result.root.findByType(TestComponent)
    expect(testComponentInstance.props.theme).toEqual(palette)
  })
})
