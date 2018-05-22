import React from "react"
import { storiesOf } from "@storybook/react-native"

import { withContextProviders } from "../withContextProviders"

import GeneralError from "../../source/atoms/GeneralError"

storiesOf("GeneralError", module)
  .addDecorator(story => withContextProviders(story)())
  .add("with no provided message", () => <GeneralError />)
  .add("with provided message", () => <GeneralError errorMessage="Something Specific..." />)
