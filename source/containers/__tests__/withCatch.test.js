jest.mock("../../firebase", () => ({
  crashlytics: {
    log: jest.fn(),
    recordError: jest.fn(),
  },
}))

import React from "react"
import { Text } from "react-native"

import Renderer from "react-test-renderer"

import withCatch from "../withCatch"

const ErrorComponent = () => <Text>Error</Text>
const TestComponent = () => <Text>Test</Text>
const BrokenComponent = () => {
  /* eslint-disable-next-line fp/no-throw */
  throw new Error("Some Error!")
}

describe("withCatch", () => {
  it("matches snapshots with ErrorComponent", () => {
    const ResultComponent = withCatch(ErrorComponent)(TestComponent)
    const Render = Renderer.create(<ResultComponent />).toJSON()
    expect(Render).toMatchSnapshot()
  })
  it("matches snapshots with ErrorComponent and a throw", () => {
    const ResultComponent = withCatch(ErrorComponent, "Custom Error")(TestComponent)
    const Render = Renderer.create(<ResultComponent />).toJSON()
    expect(Render).toMatchSnapshot()
  })
  it("matches snapshots with ErrorComponent and errorMessage", () => {
    const ResultComponent = withCatch(ErrorComponent)(BrokenComponent)
    const Render = Renderer.create(<ResultComponent />).toJSON()
    expect(Render).toMatchSnapshot()
  })
  it("matches snapshots with ErrorComponent and errorMessage and a throw", () => {
    const ResultComponent = withCatch(ErrorComponent, "Custom Error")(BrokenComponent)
    const Render = Renderer.create(<ResultComponent />).toJSON()
    expect(Render).toMatchSnapshot()
  })
})
