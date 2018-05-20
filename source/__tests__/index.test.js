jest.mock("react-native-navigation", () => ({
  Navigation: {
    startTabBasedApp: jest.fn(),
    registerComponent: jest.fn((key, Component) => {
      Component()()
    }),
  },
}))
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
    const testComponent = jest.fn()
    new App({ screens: { screen1: testComponent, screen2: testComponent } })
    expect(Navigation.startTabBasedApp.mock.calls.length).toBe(1)
    expect(Navigation.registerComponent.mock.calls.length).toBe(2)
  })
})
