import React from "react"
import { Text } from "react-native"

import renderer from "react-test-renderer"

import withSafeArea from "../withSafeArea"

const component = () => <Text>Test</Text>

describe("withSafeArea", () => {
  it("wraps component", () => {
    const WrappedComponent = withSafeArea(component)
    const render = renderer.create(<WrappedComponent />).toJSON()
    expect(render).toMatchSnapshot()
  })
})
