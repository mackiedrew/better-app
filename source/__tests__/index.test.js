jest.mock("react-native-navigation")
jest.mock("../reduxStore")
jest.mock("../containers/withProviders", () => () => () => {})

import { Navigation } from "react-native-navigation"

import withProviders from "../containers/withProviders"

import { App } from "../index"

import reduxStore from "../reduxStore"

describe("App Index", () => {
  beforeEach(() => {
    Navigation.startTabBasedApp.mockReset()
    Navigation.registerComponent.mockReset()
  })
  afterAll(() => {
    Navigation.startTabBasedApp.mockRestore()
    Navigation.registerComponent.mockRestore()
    withProviders.mockRestore()
    reduxStore.mockRestore()
  })
  it("when instantiated calls appropriate registration components", () => {
    new App({ screens: [1, 2, 3] })
    expect(Navigation.startTabBasedApp.mock.calls.length).toBe(1)
    expect(Navigation.registerComponent.mock.calls.length).toBe(3)
  })
})
