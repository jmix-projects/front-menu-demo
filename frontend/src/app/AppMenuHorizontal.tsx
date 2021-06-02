import React from "react";
import { HorizontalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";
import { FormattedMessage } from "react-intl";

export const AppMenuHorizontal = () => {
  return (
    <HorizontalMenu>
      <MenuItem caption={<FormattedMessage id="router.home" />}
                icon={ <HomeOutlined />}
                onClick={tabs.closeAll} key={'horizontal-home'}>

      </MenuItem>

      <SubMenuItem caption={"Other Electronics"} key={"horizontal-otherElectronics"}>
        <SubMenuItem caption={"Smartphones"} key={"horizontal-smartphones"}>
          <SubMenuItem caption={"IOS"} key={'horizontal-ios'}>
            <MenuItem caption={<FormattedMessage id={"router.Apple"} />}
                      icon={ <BarsOutlined />}
                      screenId={"Apple"}
                      key={'horizontal-apple'}/>
          </SubMenuItem>
          <SubMenuItem caption={"Android"} key={'horizontal-android'}>
            <MenuItem caption={<FormattedMessage id={"router.Xiaomi"} />}
                      icon={<BarsOutlined />}
                      screenId={"Xiaomi"} key={'horizontal-xiaomi'}/>
            <MenuItem caption={<FormattedMessage id={"router.Samsung"} />}
                      icon={<BarsOutlined />}
                      screenId={"Samsung"} key={'horizontal-samsung'}/>
          </SubMenuItem>
        </SubMenuItem>
        <SubMenuItem caption={"Notebooks"} key={'horizontal-notebooks'}>
          <SubMenuItem caption={"Windows"} key={'horizontal-windows'}>
            <MenuItem caption={<FormattedMessage id={"router.Asus"} />}
                      icon={<BarsOutlined />}
                      screenId={"Asus"}
                      key={'horizontal-asus'}/>

            <MenuItem caption={<FormattedMessage id={"router.Msi"} />}
                      icon={<BarsOutlined />}
                      screenId={"Msi"}
                      key={'horizontal-msi'}/>
          </SubMenuItem>
          <SubMenuItem caption={"MacOS"} key={'horizontal-macos'}>
            <MenuItem caption={<FormattedMessage id={"router.MacbookAir"} />}
                      icon={<BarsOutlined />}
                      screenId={"MacbookAir"}
                      key={'horizontal-air'}/>
            <MenuItem caption={<FormattedMessage id={"router.MacbookPro"} />}
                      icon={<BarsOutlined />} screenId={"MacbookPro"} key={'horizontal-pro'}/>

          </SubMenuItem>
        </SubMenuItem>
      </SubMenuItem>


      <MenuItem caption={<FormattedMessage id={"router.TV"} />}
                icon={<BarsOutlined />}
                screenId={"TV"}
                key={'horizontal-tv'}/>

      <MenuItem caption={<FormattedMessage id={"router.Computers"} />}
                icon={<BarsOutlined />}
                screenId={"Computers"}
                key={'horizontal-computers'}/>
    </HorizontalMenu>
  );
};
