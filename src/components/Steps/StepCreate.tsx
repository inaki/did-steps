import { Button, Box, Text, Icon, Flex } from "@chakra-ui/react";
import { TbClipboard, TbClipboardCheck } from "react-icons/tb";
import { useClipboard } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const ION = require("@decentralized-identity/ion-tools");

type StepCreateProps = {
  handleStatus: Function;
  handleDid: Function;
  setPrivateKeys: Function;
};

function StepCreate({
  handleStatus,
  handleDid,
  setPrivateKeys,
}: StepCreateProps) {
  const { onCopy, value, setValue, hasCopied } =
    useClipboard("create a new DID");

  const createDid = async () => {
    const authnKeys = await ION.generateKeyPair("secp256k1");

    let did = await new ION.DID({
      content: {
        publicKeys: [
          {
            id: "key-1",
            type: "EcdsaSecp256k1VerificationKey2019",
            publicKeyJwk: authnKeys.publicJwk,
            purposes: ["authentication"],
          },
        ],
        services: [
          {
            id: "domain-1",
            type: "LinkedDomains",
            serviceEndpoint: "https://getportabl.com",
          },
        ],
      },
    });

    let lingFormURI = await did.getURI();
    setValue(lingFormURI);
    handleStatus("didCreated");
    handleDid(lingFormURI);
    setPrivateKeys(authnKeys.privateJwk);
  };

  return (
    <Box>
      <Button onClick={createDid} borderRadius={4} backgroundColor={"#AE3EC9"}>
        Create New DID
      </Button>
      <Flex
        backgroundColor={"black"}
        p={1}
        my={4}
        width={"500px"}
        flexDirection={"column"}
      >
        <Icon
          onClick={onCopy}
          as={hasCopied ? TbClipboardCheck : TbClipboard}
          alignSelf={"end"}
          _hover={{ stroke: "gray" }}
        />
        <Text overflowX={"scroll"} whiteSpace={"nowrap"} pb={1} px={2}>
          {value}
        </Text>
      </Flex>
    </Box>
  );
}

export default StepCreate;
