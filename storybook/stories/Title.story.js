import React from "react"
import { storiesOf } from "@storybook/react-native"

import Title from "../../source/atoms/Title"
import withTheme from "../../source/containers/withTheme"
import palette from "../../source/palette"

storiesOf("Title", module)
  .addDecorator(story => withTheme(palette)(story)())
  .add("with no text", () => <Title />)
  .add("with short text", () => <Title>Some Title</Title>)
  .add("with long text", () => (
    <Title>
      Some Title That Is Clearly Overly Long, Its A Fair Test Though to See How Adaptive This Is
    </Title>
  ))
  .add("with emoji", () => <Title>😀 😎 👍 💯</Title>)
