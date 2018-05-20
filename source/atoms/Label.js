import styled from "styled-components/native"

import style from "../helpers/getStyle"

export default styled.Text`
  flex: 1;
  ${props => style("color", "theme.color.black", props)};
  ${props => style("font-family", "theme.fontFamily.title.regular", props)};
  ${props => style("font-size", "theme.fontSize.medium", props)};
`
