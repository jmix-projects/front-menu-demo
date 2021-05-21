import React from "react";
import SamsungEdit from "./SamsungEdit";
import SamsungList from "./SamsungList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "Samsung";
const ROUTING_PATH = "/samsungManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "samsungManagement list",
  <SamsungList />,
  ENTITY_NAME,
  "SamsungManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "samsungManagement", <SamsungEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "samsungManagement", <SamsungList />);
