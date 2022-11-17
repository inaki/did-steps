import { Text, Button, Icon } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { TbClipboard, TbClipboardCheck } from "react-icons/tb";
import { useClipboard } from "@chakra-ui/react";
import Pretty from "../shared/Pretty";
const ION = require("@decentralized-identity/ion-tools");

type StepResolveProps = {
  did: string;
  handleStatus: Function;
  updataDidResolved: Function;
};

function StepResolve({
  did,
  handleStatus,
  updataDidResolved,
}: StepResolveProps) {
  const [resolvedDid, setResolvedDid] = useState(null);
  const { onCopy, setValue, hasCopied } = useClipboard("create a new DID");

  const handleResolve = async () => {
    const response = await ION.resolve(did);
    setResolvedDid(response);
    setValue(JSON.stringify(response, null, 2));
    updataDidResolved(response);
    handleStatus("didResolved");
  };

  return (
    <Grid templateColumns={"50% 50%"} gap={2}>
      <GridItem h="10" bg="#2C2E33" pt={2} pl={2} colStart={1} colEnd={2}>
        <Text
          width={"270px"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
        >
          {did}
        </Text>
      </GridItem>
      <GridItem h="10" colStart={2} colEnd={4}>
        <Button
          variant={"outline"}
          borderColor={"#AE3EC9"}
          color={"#AE3EC9"}
          borderRadius={4}
          width={"100%"}
          onClick={handleResolve}
        >
          Resolve
        </Button>
      </GridItem>
      {resolvedDid ? (
        <GridItem colStart={1} colEnd={4} mt={6} bg="black">
          <Text p={"10px 30px"} m={0} display={"block"} maxWidth={"600px"}>
            <Icon
              onClick={onCopy}
              as={hasCopied ? TbClipboardCheck : TbClipboard}
              alignSelf={"end"}
              _hover={{ stroke: "gray" }}
              float={"right"}
            />
            <Pretty value={resolvedDid} />
          </Text>
        </GridItem>
      ) : null}
    </Grid>
  );
}

export default StepResolve;
