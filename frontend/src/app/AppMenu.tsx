import React from "react";
import { VerticalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";
import { FormattedMessage } from "react-intl";

export const AppMenu = () => {
  return (
    <VerticalMenu>
      <MenuItem caption={<FormattedMessage id="router.home" />}
                icon={ <HomeOutlined />}
                onClick={tabs.closeAll} key={'home'}>

      </MenuItem>

      <SubMenuItem caption={"Other Electronics"} key={"otherElectronics"}>
        <SubMenuItem caption={"Smartphones"} key={"smartphones"}>
          <SubMenuItem caption={"IOS"} key={'ios'}>
            <MenuItem caption={<FormattedMessage id={"router.AppleManagement"} />}
                      icon={ <BarsOutlined />}
                      screenId={"AppleManagement"}
                      key={'apple'}/>
          </SubMenuItem>
          <SubMenuItem caption={"Android"} key={'android'}>
            <MenuItem caption={<FormattedMessage id={"router.XiaomiManagement"} />}
                      icon={<BarsOutlined />}
                      screenId={"XiaomiManagement"} key={'xiaomi'}/>
            <MenuItem caption={<FormattedMessage id={"router.SamsungManagement"} />}
                      icon={<BarsOutlined />}
                      screenId={"SamsungManagement"} key={'samsung'}/>
          </SubMenuItem>
        </SubMenuItem>
        <SubMenuItem caption={"Notebooks"} key={'notebooks'}>
          <SubMenuItem caption={"Windows"} key={'windows'}>
              <MenuItem caption={<FormattedMessage id={"router.AsusManagement"} />}
                        icon={<BarsOutlined />}
                        screenId={"AsusManagement"}
                        key={'asus'}/>

              <MenuItem caption={<FormattedMessage id={"router.MsiManagement"} />}
                        icon={<BarsOutlined />}
                        screenId={"MsiManagement"}
                        key={'msi'}/>
          </SubMenuItem>
            <SubMenuItem caption={"MacOS"} key={'macos'}>
                <MenuItem caption={<FormattedMessage id={"router.MacbookAirManagement"} />}
                          icon={<BarsOutlined />}
                          screenId={"MacbookAirManagement"}
                          key={'air'}/>
                <MenuItem caption={<FormattedMessage id={"router.MacbookProManagement"} />}
                          icon={<BarsOutlined />} screenId={"MacbookProManagement"} key={'pro'}/>

            </SubMenuItem>
        </SubMenuItem>
      </SubMenuItem>


      <MenuItem caption={<FormattedMessage id={"router.TVManagement"} />}
                icon={<BarsOutlined />}
                screenId={"TVManagement"}
                key={'tv'}/>

      <MenuItem caption={<FormattedMessage id={"router.ComputersManagement"} />}
                icon={<BarsOutlined />}
                screenId={"ComputersManagement"}
                key={'computers'}/>
    </VerticalMenu>
  );
};
