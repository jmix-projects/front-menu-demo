import React from "react";
import {registerRoute} from "@haulmont/jmix-react-ui";

export const Asus = () => <div>Asus</div>;

const ROUTING_PATH = "/asus";
const ENTITY_NAME = 'Asus'
registerRoute(
  `${ROUTING_PATH}?`,
  ROUTING_PATH,
  "asus",
  <Asus />,
  ENTITY_NAME,
  ENTITY_NAME
);
