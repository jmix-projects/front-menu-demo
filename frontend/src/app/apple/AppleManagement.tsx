import React from "react";
import AppleEdit from "./AppleEdit";
import AppleList from "./AppleList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "Apple";
const ROUTING_PATH = "/appleManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "appleManagement list",
  <AppleList />,
  ENTITY_NAME,
  "AppleManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "appleManagement", <AppleEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "appleManagement", <AppleList />);
