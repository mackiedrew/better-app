import styled from "styled-components/native"

import style from "../helpers/getStyle"

export default styled.Text`
  flex: 1;
  align-self: flex-end;
  ${props => style("color", "theme.color.black", props)};
  ${props => style("font-family", "theme.fontFamily.title.bold", props)};
  ${props => style("font-size", "theme.fontSize.extraLarge", props)};
  ${props => style("margin-bottom", "theme.spacing.extraLarge", props)};
`
