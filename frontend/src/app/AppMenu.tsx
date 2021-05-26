import React from "react";
import { VerticalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";
import { FormattedMessage } from "react-intl";

export const AppMenu = () => {
  return (
    <VerticalMenu>
      <MenuItem icon={ <HomeOutlined />} onClick={tabs.closeAll} key={'home'}>
        <FormattedMessage id="router.home" />
      </MenuItem>

      <SubMenuItem title={"Other Electronics"} key={"otherElectronics"}>
        <SubMenuItem title={"Smartphones"} key={"smartphones"}>
          <SubMenuItem title={"IOS"} key={'ios'}>
            <MenuItem icon={ <BarsOutlined />} screenId={"AppleManagement"} key={'apple'}>
              <FormattedMessage id={"router.AppleManagement"} />
            </MenuItem>
          </SubMenuItem>
          <SubMenuItem title={"Android"} key={'android'}>
            <MenuItem icon={<BarsOutlined />} screenId={"XiaomiManagement"} key={'xiaomi'}>
              <FormattedMessage id={"router.XiaomiManagement"} />
            </MenuItem>
            <MenuItem icon={<BarsOutlined />} screenId={"SamsungManagement"} key={'samsung'}>
              <FormattedMessage id={"router.SamsungManagement"} />
            </MenuItem>
          </SubMenuItem>
        </SubMenuItem>
        <SubMenuItem title={"Notebooks"} key={'notebooks'}>
          <SubMenuItem title={"Windows"} key={'windows'}>
              <MenuItem icon={<BarsOutlined />} screenId={"AsusManagement"} key={'asus'}>
                  <FormattedMessage id={"router.AsusManagement"} />
              </MenuItem>

              <MenuItem icon={<BarsOutlined />} screenId={"MsiManagement"} key={'msi'}>
                  <FormattedMessage id={"router.MsiManagement"} />
              </MenuItem>
          </SubMenuItem>
            <SubMenuItem title={"MacOS"} key={'macos'}>
                <MenuItem icon={<BarsOutlined />} screenId={"MacbookAirManagement"} key={'air'}>
                    <FormattedMessage id={"router.MacbookAirManagement"} />
                </MenuItem>

                <MenuItem icon={<BarsOutlined />} screenId={"MacbookProManagement"} key={'pro'}>
                    <FormattedMessage id={"router.MacbookProManagement"} />
                </MenuItem>
            </SubMenuItem>
        </SubMenuItem>
      </SubMenuItem>


      <MenuItem icon={<BarsOutlined />} screenId={"TVManagement"} key={'tv'}>
        <FormattedMessage id={"router.TVManagement"} />
      </MenuItem>



      <MenuItem icon={<BarsOutlined />} screenId={"ComputersManagement"} key={'computers'}>
        <FormattedMessage id={"router.ComputersManagement"} />
      </MenuItem>
    </VerticalMenu>
  );
};
