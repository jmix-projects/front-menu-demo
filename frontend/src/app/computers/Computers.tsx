import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const Computers = () => <div>Computers</div>;

const ROUTING_PATH = "/computers";
const ENTITY_NAME = 'Computers'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "computers",
  <Computers />,
  ENTITY_NAME,
  ENTITY_NAME
);
