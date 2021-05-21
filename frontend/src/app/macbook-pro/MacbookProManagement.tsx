import React from "react";
import MacbookProEdit from "./MacbookProEdit";
import MacbookProList from "./MacbookProList";
import {
  registerEntityEditorScreen,
  registerEntityBrowserScreen,
  registerRoute
} from "@haulmont/jmix-react-ui";

const ENTITY_NAME = "MacbookPro";
const ROUTING_PATH = "/macbookProManagement";

registerRoute(
  `${ROUTING_PATH}/:entityId?`,
  ROUTING_PATH,
  "macbookProManagement list",
  <MacbookProList />,
  ENTITY_NAME,
  "MacbookProManagement"
);
registerEntityEditorScreen(
  ENTITY_NAME,
  "macbookProManagement",
  <MacbookProEdit />
);
registerEntityBrowserScreen(
  ENTITY_NAME,
  "macbookProManagement",
  <MacbookProList />
);
