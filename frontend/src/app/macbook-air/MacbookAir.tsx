import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const MacbookAir = () => <div>MacbookAir</div>;

const ROUTING_PATH = "/macbookAir";
const ENTITY_NAME = 'MacbookAir'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "macbookAir",
  <MacbookAir />,
  ENTITY_NAME,
  ENTITY_NAME
);
