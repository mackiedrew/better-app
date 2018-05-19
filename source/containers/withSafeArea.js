import React, { PureComponent } from "react"
import { SafeAreaView } from "react-native"
import styled from "styled-components/native"

const SafeView = styled(SafeAreaView)`
  flex: 1;
`

export default Child =>
  class extends PureComponent {
    static propTypes = {}
    static defaultProps = {}
    render = () => (
      <SafeView>
        <Child {...this.props} />
      </SafeView>
    )
  }
