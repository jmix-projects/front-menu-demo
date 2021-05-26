import React from "react";
import {HorizontalMenu, MenuItem, SubMenuItem} from "@haulmont/jmix-react-ui";
import {BarsOutlined, HomeOutlined} from "@ant-design/icons";
import {tabs} from "@haulmont/jmix-react-core";
import {FormattedMessage} from "react-intl";

export const AppMenuHorizontal = () => {
    return (
        <HorizontalMenu>
          <MenuItem icon={ <HomeOutlined />} onClick={tabs.closeAll} key={'hor-home'}>
            <FormattedMessage id="router.home" />
          </MenuItem>

          <SubMenuItem title={"Other Electronics"} key={"hor-otherElectronics"}>
            <SubMenuItem title={"Smartphones"} key={"hor-smartphones"}>
              <SubMenuItem title={"IOS"} key={'hor-ios'}>
                <MenuItem icon={ <BarsOutlined />} screenId={"AppleManagement"} key={'hor-apple'}>
                  <FormattedMessage id={"router.AppleManagement"} />
                </MenuItem>
              </SubMenuItem>
              <SubMenuItem title={"Android"} key={'hor-android'}>
                <MenuItem icon={<BarsOutlined />} screenId={"XiaomiManagement"} key={'hor-xiaomi'}>
                  <FormattedMessage id={"router.XiaomiManagement"} />
                </MenuItem>
                <MenuItem icon={<BarsOutlined />} screenId={"SamsungManagement"} key={'hor-samsung'}>
                  <FormattedMessage id={"router.SamsungManagement"} />
                </MenuItem>
              </SubMenuItem>
            </SubMenuItem>
            <SubMenuItem title={"Notebooks"} key={'hor-notebooks'}>
              <SubMenuItem title={"Windows"} key={'hor-windows'}>
                <MenuItem icon={<BarsOutlined />} screenId={"AsusManagement"} key={'hor-asus'}>
                  <FormattedMessage id={"router.AsusManagement"} />
                </MenuItem>

                <MenuItem icon={<BarsOutlined />} screenId={"MsiManagement"} key={'hor-msi'}>
                  <FormattedMessage id={"router.MsiManagement"} />
                </MenuItem>
              </SubMenuItem>
              <SubMenuItem title={"MacOS"} key={'hor-macos'}>
                <MenuItem icon={<BarsOutlined />} screenId={"MacbookAirManagement"} key={'hor-air'}>
                  <FormattedMessage id={"router.MacbookAirManagement"} />
                </MenuItem>

                <MenuItem icon={<BarsOutlined />} screenId={"MacbookProManagement"} key={'hor-pro'}>
                  <FormattedMessage id={"router.MacbookProManagement"} />
                </MenuItem>
              </SubMenuItem>
            </SubMenuItem>
          </SubMenuItem>

          <MenuItem icon={<BarsOutlined />} screenId={"TVManagement"} key={'hor-tv'}>
            <FormattedMessage id={"router.TVManagement"} />
          </MenuItem>

          <MenuItem icon={<BarsOutlined />} screenId={"ComputersManagement"} key={'hor-computers'}>
            <FormattedMessage id={"router.ComputersManagement"} />
          </MenuItem>
        </HorizontalMenu>
  );
};
