import React from "react";
import { HorizontalMenu, MenuItem, SubMenuItem } from "@haulmont/jmix-react-ui";
import { BarsOutlined, HomeOutlined } from "@ant-design/icons";
import { tabs } from "@haulmont/jmix-react-core";
import { FormattedMessage } from "react-intl";

export const AppMenuHorizontal = () => {
    return (
        <HorizontalMenu>
            <MenuItem onClick={tabs.closeAll}>
                <HomeOutlined />
                <FormattedMessage id="router.home" />
            </MenuItem>

            <SubMenuItem title={"Other Electronics"}>
                <SubMenuItem title={"Smartphones"}>
                    <SubMenuItem title={"IOS"}>
                        <MenuItem screenId={"AppleManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.AppleManagement"} />
                        </MenuItem>
                    </SubMenuItem>
                    <SubMenuItem title={"Android"}>
                        <MenuItem screenId={"XiaomiManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.XiaomiManagement"} />
                        </MenuItem>
                        <MenuItem screenId={"SamsungManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.SamsungManagement"} />
                        </MenuItem>
                    </SubMenuItem>
                </SubMenuItem>
                <SubMenuItem title={"Notebooks"}>
                    <SubMenuItem title={"Windows"}>
                        <MenuItem screenId={"AsusManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.AsusManagement"} />
                        </MenuItem>

                        <MenuItem screenId={"MsiManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.MsiManagement"} />
                        </MenuItem>
                    </SubMenuItem>
                    <SubMenuItem title={"MacOS"}>
                        <MenuItem screenId={"MacbookAirManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.MacbookAirManagement"} />
                        </MenuItem>

                        <MenuItem screenId={"MacbookProManagement"}>
                            <BarsOutlined />
                            <FormattedMessage id={"router.MacbookProManagement"} />
                        </MenuItem>
                    </SubMenuItem>
                </SubMenuItem>
            </SubMenuItem>


            <MenuItem screenId={"TVManagement"}>
                <BarsOutlined />
                <FormattedMessage id={"router.TVManagement"} />
            </MenuItem>



            <MenuItem screenId={"ComputersManagement"}>
                <BarsOutlined />
                <FormattedMessage id={"router.ComputersManagement"} />
            </MenuItem>
        </HorizontalMenu>
    );
};
