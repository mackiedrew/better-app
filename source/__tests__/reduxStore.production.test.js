jest.mock("../env", () => ({ IS_DEVELOPMENT: false }))
import reduxStore from "../reduxStore"

describe("reduxStore", () => {
  it("creates valid store in production", () => {
    expect(reduxStore.dispatch instanceof Function).toBe(true)
    expect(reduxStore.getState instanceof Function).toBe(true)
  })
})
