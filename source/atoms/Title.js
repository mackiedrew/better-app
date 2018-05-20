import styled from "styled-components/native"

import style from "../helpers/getStyle"

export default styled.Text`
  ${props => style("color", "theme.color.black", props)};
  ${props => style("font-size", "theme.fontSize.extraLarge", props)};
`
