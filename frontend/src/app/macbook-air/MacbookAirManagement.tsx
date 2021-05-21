import React from "react";
import MacbookAirEdit from "./MacbookAirEdit";
import MacbookAirList from "./MacbookAirList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "MacbookAir";
const ROUTING_PATH = "/macbookAirManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "macbookAirManagement list",
  <MacbookAirList />,
  ENTITY_NAME,
  "MacbookAirManagement"
);
registerEntityEditorScreen(
  ENTITY_NAME,
  "macbookAirManagement",
  <MacbookAirEdit />
);
registerEntityBrowserScreen(
  ENTITY_NAME,
  "macbookAirManagement",
  <MacbookAirList />
);
