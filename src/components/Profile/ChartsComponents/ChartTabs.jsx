import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

import GraphicCSS from "./Chart.module.css";

// Charts
import SimpleBarChartMatDweb from "../../charts/SimpleBarChartMatDweb";
import PieChartSimple from "../../charts/PieChartSimple";
import SimpleRadarChart from "../../charts/SimpleRadarChart";

function BarsGraphic() {
  const optionsMenu = ["Monthly", "Per year", "Daily", "Every 1h"];

  // Responsive configuration for graphics container
  const [containerWidth, setContainerWidth] = useState(350);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth <= 600 ? 250 : 350);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={GraphicCSS.graphic}>
      <label className={GraphicCSS.graphic_menu}>
        {/* Dropdown Menu */}
        <Menu>
          <MenuButton
            as={Button}
            position="absolute"
            mb="220px"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="20px"
            backgroundColor="rgb(25, 25, 30)"
            color="#fff"
            height="25px"
            _focus={{ boxShadow: "outline" }}
            _active={{ background: "rgb(37, 37, 45)" }}
            _hover={{ opacity: 0.8 }}
            rightIcon={<IoIosArrowDown />}
          >
            Monthly
          </MenuButton>

          <MenuList backgroundColor="rgb(37, 37, 45)" border="none">
            {optionsMenu.map((option, index) => (
              <MenuItem
                key={index}
                backgroundColor="rgb(37, 37, 45)"
                color="#aaa"
                _hover={{ background: "rgb(50, 50, 58)" }}
              >
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        {/* Tabs */}
        <Tabs
          width={containerWidth}
          height="400px"
          colorScheme="gray"
          variant="soft-rounded"
        >
          <TabList border="none" mb={3} justifyContent="center">
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel width="100%" height="380px">
              <SimpleBarChartMatDweb />
            </TabPanel>

            <TabPanel width="100%" height="380px">
              <PieChartSimple />
            </TabPanel>

            <TabPanel width="100%" height="380px">
              <SimpleRadarChart />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </label>
    </div>
  );
}

export default BarsGraphic;
