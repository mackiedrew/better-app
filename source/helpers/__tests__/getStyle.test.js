import getStyle from "../getStyle"

describe("tests for getStyle helper", () => {
  it("returns expected style if it exists", () => {
    const input = {
      theme: {
        color: {
          text: "black",
        },
      },
    }
    const styleRule = "color"
    const result = getStyle(styleRule, "theme.color.text", input)
    expect(result).toEqual("color: black")
  })

  it("returns no style if it does not exist", () => {
    const input = {
      theme: {
        color: {
          text: "black",
        },
      },
    }
    const styleRule = "color"
    const result = getStyle(styleRule, "theme.color.heading", input)
    expect(result).toEqual(undefined)
  })

  it("returns no style if no props passed", () => {
    const styleRule = "color"
    const result = getStyle(styleRule, "theme.color.heading")
    expect(result).toEqual(undefined)
  })
})
