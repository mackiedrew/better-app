jest.mock("react-native-firebase", () => ({
  crashlytics: jest.fn(),
  analytics: jest.fn(),
}))

import Firebase from "react-native-firebase"

import "../firebase"

describe("Firebase", () => {
  it("calls all initializers", () => {
    expect(Firebase.analytics.mock.calls.length).toBe(1)
    expect(Firebase.crashlytics.mock.calls.length).toBe(1)
  })
})
