import React, { Component } from "react"
import { Text, View } from "react-native"
import Renderer from "react-test-renderer"

import copy from "../../copy"
import { CopyConsumer, CopyProvider, withCopy, withCopyProvider } from "../withCopy"

const ParentComponent = props => <View>{props.children}</View>
class TestComponent extends Component {
  render = () => <Text>test</Text>
}

describe("withCopy", () => {
  it("tests props copy through components", () => {
    const ref = React.createRef()
    Renderer.create(
      <CopyProvider value={copy}>
        <CopyConsumer>{consumable => <TestComponent ref={ref} copy={consumable} />}</CopyConsumer>
      </CopyProvider>,
    )
    const { current: testComponentInstance } = ref
    expect(testComponentInstance.props.copy).toEqual(copy)
  })

  it("tests props copy through HOCs", () => {
    const WrappedCopyProvider = withCopyProvider(copy)(ParentComponent)
    const WrappedCopyConsumer = withCopy(TestComponent)
    const ref = React.createRef()
    Renderer.create(
      <WrappedCopyProvider>
        <WrappedCopyConsumer ref={ref} />
      </WrappedCopyProvider>,
    )
    const { current: testComponentInstance } = ref
    expect(testComponentInstance.props.copy).toEqual(copy)
  })
})
