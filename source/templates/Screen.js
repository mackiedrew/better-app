import styled from "styled-components/native"

import style from "../helpers/getStyle"

export default styled.ScrollView`
  flex: 1;
  ${props => style("background-color", "theme.color.white", props)};
  ${props => style("padding", "theme.spacing.large", props)};
`
