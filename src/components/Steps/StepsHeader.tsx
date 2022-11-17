import { TabList, Tab } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TbSignature, TbHierarchy, TbTag } from "react-icons/tb";
import { Text } from "@chakra-ui/react";

type StepsHeaderProps = {
  status: string[];
};

function StepsHeader({ status }: StepsHeaderProps) {
  return (
    <TabList justifyContent={"center"} mb={4}>
      <Tab
        _selected={{ color: "white", bg: "primary" }}
        backgroundColor={"blackOpaque"}
        borderRadius={"10px 0 0 10px"}
      >
        <Icon m={"5px 10px 5px 15px"} as={TbTag} />
        <Text>Create</Text>
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "primary" }}
        backgroundColor={"blackOpaque"}
        isDisabled={status.indexOf("didCreated") === -1}
      >
        <Icon m={"5px 10px 5px 15px"} as={TbHierarchy} />
        <Text m={"5px 15px 5px 0"}>Resolve</Text>
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "primary" }}
        backgroundColor={"blackOpaque"}
        borderRadius={"0 10px 10px 0"}
        isDisabled={status.indexOf("didResolved") === -1}
      >
        <Icon as={TbSignature} />
        <Text m={"5px 15px 5px 10px"}>Sign and Verify Data</Text>
      </Tab>
    </TabList>
  );
}

export default StepsHeader;
