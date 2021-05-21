import React from "react";
import ComputersEdit from "./ComputersEdit";
import ComputersList from "./ComputersList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "Computers";
const ROUTING_PATH = "/computersManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "computersManagement list",
  <ComputersList />,
  ENTITY_NAME,
  "ComputersManagement"
);
registerEntityEditorScreen(
  ENTITY_NAME,
  "computersManagement",
  <ComputersEdit />
);
registerEntityBrowserScreen(
  ENTITY_NAME,
  "computersManagement",
  <ComputersList />
);
