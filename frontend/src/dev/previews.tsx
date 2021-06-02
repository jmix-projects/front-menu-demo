import { Computers } from "../app/computers/Computers";
import { TV } from "../app/t-v/TV";
import { Samsung } from "../app/samsung/Samsung";
import { Xiaomi } from "../app/xiaomi/Xiaomi";
import { MacbookPro } from "../app/macbook-pro/MacbookPro";
import { MacbookAir } from "../app/macbook-air/MacbookAir";
import { Msi } from "../app/msi/Msi";
import { Asus } from "../app/asus/Asus";
import { Apple } from "../app/apple/Apple";
import React from "react";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/apple">
        <Apple />
      </ComponentPreview>

      <ComponentPreview path="/asus">
        <Asus />
      </ComponentPreview>

      <ComponentPreview path="/msi">
        <Msi />
      </ComponentPreview>

      <ComponentPreview path="/macbookAir">
        <MacbookAir />
      </ComponentPreview>

      <ComponentPreview path="/macbookPro">
        <MacbookPro />
      </ComponentPreview>

      <ComponentPreview path="/macbookPro">
        <MacbookPro />
      </ComponentPreview>

      <ComponentPreview path="/xiaomi">
        <Xiaomi />
      </ComponentPreview>

      <ComponentPreview path="/samsung">
        <Samsung />
      </ComponentPreview>

      <ComponentPreview path="/tV">
        <TV />
      </ComponentPreview>

      <ComponentPreview path="/computers">
        <Computers />
      </ComponentPreview>
    </Previews>
  );
};
