import example, {
  initialState,
  ADD,
  SUBTRACT,
  RESET,
  addExample,
  subtractExample,
  resetExample,
} from "../../ducks/example"

const expectSnapshot = thing => expect(thing).toMatchSnapshot()

describe("example reducer", () => {
  it("should handle no action", () => expectSnapshot(example(initialState)))
  it("should handle empty action", () => expectSnapshot(example(initialState, {})))
  it("should handle ADD", () => expectSnapshot(example(initialState, { type: ADD })))
  it("should handle SUBTRACT", () => expectSnapshot(example(initialState, { type: SUBTRACT })))
  it("should handle RESET", () => expectSnapshot(example(initialState, { type: RESET })))
})

describe("example action creators", () => {
  it("addExample", () => expectSnapshot(addExample()))
  it("subtractExample", () => expectSnapshot(subtractExample()))
  it("resetExample", () => expectSnapshot(resetExample()))
})
