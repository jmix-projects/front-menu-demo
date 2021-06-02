import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const MacbookPro = () => <div>MacbookPro</div>;

const ROUTING_PATH = "/macbookPro";
const ENTITY_NAME = 'MacbookPro'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "macbookPro",
  <MacbookPro />,
  ENTITY_NAME,
  ENTITY_NAME
);
