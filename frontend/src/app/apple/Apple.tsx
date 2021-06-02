import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui"

export const Apple = () => <div>Apple</div>;

const ROUTING_PATH = "/apple";
const ENTITY_NAME = 'Apple'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "apple",
  <Apple />,
  ENTITY_NAME,
  ENTITY_NAME
);
