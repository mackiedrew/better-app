import React from "react"
import { Text } from "react-native"
import Renderer from "react-test-renderer"

import withRedux from "../withRedux"

const TestComponent = () => <Text>Test</Text>

describe("withRedux", () => {
  it("works as expected", () => {
    const HOC = withRedux({})
    expect(HOC instanceof Function).toBe(true)
    const Component = HOC(TestComponent)
    expect(Component instanceof Function).toBe(true)
    const Render = Renderer.create(<Component />).toJSON()
    expect(Render).toMatchSnapshot()
  })
})
