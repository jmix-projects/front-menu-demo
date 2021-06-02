import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const Xiaomi = () => <div>Xiaomi</div>;

const ROUTING_PATH = "/xiaomi";
const ENTITY_NAME = 'Xiaomi'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "xiaomi",
  <Xiaomi />,
  ENTITY_NAME,
  ENTITY_NAME
);
