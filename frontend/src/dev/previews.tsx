import MsiList from "../app/msi/MsiList";
import MsiEdit from "../app/msi/MsiEdit";
import AsusList from "../app/asus/AsusList";
import AsusEdit from "../app/asus/AsusEdit";
import ComputersList from "../app/computers/ComputersList";
import ComputersEdit from "../app/computers/ComputersEdit";
import MacbookProList from "../app/macbook-pro/MacbookProList";
import MacbookProEdit from "../app/macbook-pro/MacbookProEdit";
import MacbookAirList from "../app/macbook-air/MacbookAirList";
import MacbookAirEdit from "../app/macbook-air/MacbookAirEdit";
import TVList from "../app/t-v/TVList";
import TVEdit from "../app/t-v/TVEdit";
import XiaomiList from "../app/xiaomi/XiaomiList";
import XiaomiEdit from "../app/xiaomi/XiaomiEdit";
import SamsungList from "../app/samsung/SamsungList";
import SamsungEdit from "../app/samsung/SamsungEdit";
import AppleList from "../app/apple/AppleList";
import AppleEdit from "../app/apple/AppleEdit";
import React from "react";
import { Previews, ComponentPreview } from "@haulmont/react-ide-toolbox";

export const ComponentPreviews = () => {
  return (
    <Previews>
      <ComponentPreview path="/AppleEdit">
        <AppleEdit />
      </ComponentPreview>

      <ComponentPreview path="/AppleList">
        <AppleList />
      </ComponentPreview>

      <ComponentPreview path="/SamsungEdit">
        <SamsungEdit />
      </ComponentPreview>

      <ComponentPreview path="/SamsungList">
        <SamsungList />
      </ComponentPreview>

      <ComponentPreview path="/XiaomiEdit">
        <XiaomiEdit />
      </ComponentPreview>

      <ComponentPreview path="/XiaomiList">
        <XiaomiList />
      </ComponentPreview>

      <ComponentPreview path="/TVEdit">
        <TVEdit />
      </ComponentPreview>

      <ComponentPreview path="/TVList">
        <TVList />
      </ComponentPreview>

      <ComponentPreview path="/MacbookAirEdit">
        <MacbookAirEdit />
      </ComponentPreview>

      <ComponentPreview path="/MacbookAirList">
        <MacbookAirList />
      </ComponentPreview>

      <ComponentPreview path="/MacbookProEdit">
        <MacbookProEdit />
      </ComponentPreview>

      <ComponentPreview path="/MacbookProList">
        <MacbookProList />
      </ComponentPreview>

      <ComponentPreview path="/ComputersEdit">
        <ComputersEdit />
      </ComponentPreview>

      <ComponentPreview path="/ComputersList">
        <ComputersList />
      </ComponentPreview>

      <ComponentPreview path="/AsusEdit">
        <AsusEdit />
      </ComponentPreview>

      <ComponentPreview path="/AsusList">
        <AsusList />
      </ComponentPreview>

      <ComponentPreview path="/MsiEdit">
        <MsiEdit />
      </ComponentPreview>

      <ComponentPreview path="/MsiList">
        <MsiList />
      </ComponentPreview>
    </Previews>
  );
};
