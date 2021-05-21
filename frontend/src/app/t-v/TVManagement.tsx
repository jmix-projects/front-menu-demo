import React from "react";
import TVEdit from "./TVEdit";
import TVList from "./TVList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "TV";
const ROUTING_PATH = "/tVManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "tVManagement list",
  <TVList />,
  ENTITY_NAME,
  "TVManagement"
);
registerEntityEditorScreen(ENTITY_NAME, "tVManagement", <TVEdit />);
registerEntityBrowserScreen(ENTITY_NAME, "tVManagement", <TVList />);
