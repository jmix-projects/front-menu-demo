import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const Samsung = () => <div>Samsung</div>;

const ROUTING_PATH = "/samsung";
const ENTITY_NAME = 'Samsung'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "samsung",
  <Samsung />,
  ENTITY_NAME,
  ENTITY_NAME
);
