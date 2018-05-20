jest.mock("../env", () => ({ IS_DEVELOPMENT: true }))
import reduxStore from "../reduxStore"

describe("reduxStore", () => {
  it("creates valid store in development", () => {
    expect(reduxStore.dispatch instanceof Function).toBe(true)
    expect(reduxStore.getState instanceof Function).toBe(true)
  })
})
