import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const TV = () => <div>TV</div>;

const ROUTING_PATH = "/tv";
const ENTITY_NAME = 'TV'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "tv",
  <TV />,
  ENTITY_NAME,
  ENTITY_NAME
);
