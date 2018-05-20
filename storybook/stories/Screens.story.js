import React from "react"
import { storiesOf } from "@storybook/react-native"

import { withContextProviders } from "../withContextProviders"

import Dashboard from "../../source/screens/Dashboard"

storiesOf("Screens", module)
  .addDecorator(story => withContextProviders(story)())
  .add("Dashboard", () => <Dashboard />)
