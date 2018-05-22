jest.mock("recompose", () => ({
  compose: jest.fn(() => () => {}),
  pure: jest.fn(),
  branch: jest.fn(() => () => {}),
  renderComponent: jest.fn(),
}))
jest.mock("../../reduxStore")
jest.mock("../withRedux")
jest.mock("../withTheme")
jest.mock("../withCopy")
jest.mock("../withSafeArea")
jest.mock("react-native-firebase", () => ({ analytics: jest.fn(), crashlytics: jest.fn() }))

import React from "react"
import { compose } from "recompose"
import { Text } from "react-native"

import withProviders from "../withProviders"

describe("withProviders", () => {
  it("composes", () => {
    withProviders(() => <Text>Test</Text>)
    expect(compose).toHaveBeenCalled()
  })
})
