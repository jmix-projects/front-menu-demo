import React from "react";
import AsusEdit from "./AsusEdit";
import AsusList from "./AsusList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "Asus";
const ROUTING_PATH = "/asusManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "asusManagement list",
  <AsusList />,
  ENTITY_NAME,
  "AsusManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "asusManagement", <AsusEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "asusManagement", <AsusList />);
