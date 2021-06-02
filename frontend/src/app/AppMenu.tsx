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
            <MenuItem caption={<FormattedMessage id={"router.Apple"} />}
                      icon={ <BarsOutlined />}
                      screenId={"Apple"}
                      key={'apple'}/>
          </SubMenuItem>
          <SubMenuItem caption={"Android"} key={'android'}>
            <MenuItem caption={<FormattedMessage id={"router.Xiaomi"} />}
                      icon={<BarsOutlined />}
                      screenId={"Xiaomi"} key={'xiaomi'}/>
            <MenuItem caption={<FormattedMessage id={"router.Samsung"} />}
                      icon={<BarsOutlined />}
                      screenId={"Samsung"} key={'samsung'}/>
          </SubMenuItem>
        </SubMenuItem>
        <SubMenuItem caption={"Notebooks"} key={'notebooks'}>
          <SubMenuItem caption={"Windows"} key={'windows'}>
            <MenuItem caption={<FormattedMessage id={"router.Asus"} />}
                      icon={<BarsOutlined />}
                      screenId={"Asus"}
                      key={'asus'}/>

            <MenuItem caption={<FormattedMessage id={"router.Msi"} />}
                      icon={<BarsOutlined />}
                      screenId={"Msi"}
                      key={'msi'}/>
          </SubMenuItem>
          <SubMenuItem caption={"MacOS"} key={'macos'}>
            <MenuItem caption={<FormattedMessage id={"router.MacbookAir"} />}
                      icon={<BarsOutlined />}
                      screenId={"MacbookAir"}
                      key={'air'}/>
            <MenuItem caption={<FormattedMessage id={"router.MacbookPro"} />}
                      icon={<BarsOutlined />} screenId={"MacbookPro"} key={'pro'}/>

          </SubMenuItem>
        </SubMenuItem>
      </SubMenuItem>


      <MenuItem caption={<FormattedMessage id={"router.TV"} />}
                icon={<BarsOutlined />}
                screenId={"TV"}
                key={'tv'}/>

      <MenuItem caption={<FormattedMessage id={"router.Computers"} />}
                icon={<BarsOutlined />}
                screenId={"Computers"}
                key={'computers'}/>
    </VerticalMenu>
  );
};
