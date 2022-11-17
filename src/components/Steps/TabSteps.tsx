import { TabList, Tab } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TbSignature, TbHierarchy, TbTag } from "react-icons/tb";
import { Text } from "@chakra-ui/react";

type TabStepsProps = {
  status: string[];
};

function TabSteps({ status }: TabStepsProps) {
  return (
    <TabList justifyContent={"center"} mb={4}>
      <Tab
        _selected={{ color: "white", bg: "#AE3EC9" }}
        backgroundColor={"#25262B"}
        borderRadius={"10px 0 0 10px"}
      >
        <Icon as={TbTag} />
        <Text ml={2}>Create</Text>
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "#AE3EC9" }}
        backgroundColor={"#25262B"}
        isDisabled={status.indexOf("didCreated") === -1}
      >
        <Icon as={TbHierarchy} />
        <Text ml={2}>Resolve</Text>
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "#AE3EC9" }}
        backgroundColor={"#25262B"}
        borderRadius={"0 10px 10px 0"}
        isDisabled={status.indexOf("didResolved") === -1}
      >
        <Icon as={TbSignature} />
        <Text ml={2}>Sign and Verify Data</Text>
      </Tab>
    </TabList>
  );
}

export default TabSteps;
