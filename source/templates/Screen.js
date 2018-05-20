import styled from "styled-components/native"

import style from "../helpers/getStyle"

export default styled.View`
  flex: 1;
  ${props => style("background-color", "theme.color.white", props)};
`
