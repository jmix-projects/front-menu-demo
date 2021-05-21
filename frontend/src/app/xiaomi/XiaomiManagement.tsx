import React from "react";
import XiaomiEdit from "./XiaomiEdit";
import XiaomiList from "./XiaomiList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "Xiaomi";
const ROUTING_PATH = "/xiaomiManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "xiaomiManagement list",
  <XiaomiList />,
  ENTITY_NAME,
  "XiaomiManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "xiaomiManagement", <XiaomiEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "xiaomiManagement", <XiaomiList />);
