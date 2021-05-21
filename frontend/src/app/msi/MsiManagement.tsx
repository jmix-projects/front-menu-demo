import React from "react";
import MsiEdit from "./MsiEdit";
import MsiList from "./MsiList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "Msi";
const ROUTING_PATH = "/msiManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "msiManagement list",
  <MsiList />,
  ENTITY_NAME,
  "MsiManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "msiManagement", <MsiEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "msiManagement", <MsiList />);
