import React from "react"
import { storiesOf } from "@storybook/react-native"

import { withContextProviders } from "../withContextProviders"

import LabelledTextInput from "../../source/molecules/LabelledTextInput"

storiesOf("Form", module)
  .addDecorator(story => withContextProviders(story)())
  .add("Labelled Text", () => <LabelledTextInput label="Some Label!" />)
  .add("Unlabelled Text", () => <LabelledTextInput />)
