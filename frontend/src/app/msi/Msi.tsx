import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const Msi = () => <div>Msi</div>;

const ROUTING_PATH = "/msi";
const ENTITY_NAME = 'Msi'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "msi",
  <Msi />,
  ENTITY_NAME,
  ENTITY_NAME
);
