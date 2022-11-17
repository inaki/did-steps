import { Button, Icon, Input } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { TbCheck } from "react-icons/tb";
const ION = require("@decentralized-identity/ion-tools");

type StepSignProps = {
  didResolution: any;
  privateKey: any;
};

function StepSign({ didResolution, privateKey }: StepSignProps) {
  const [secret, setSecret] = useState<string>("");
  const [signedDid, setSignedDid] = useState(null);
  const [verify, setVerify] = useState(false);

  const handleSign = async () => {
    const response = await ION.signJws({
      payload: secret,
      privateJwk: privateKey,
    });
    setSignedDid(response);
  };

  const handleVerify = async () => {
    const response = await ION.verifyJws({
      jws: signedDid,
      publicJwk: didResolution.didDocument.verificationMethod[0].publicKeyJwk,
    });
    setVerify(response);
  };

  return (
    <Grid templateColumns={"50% 50%"} gap={2}>
      <GridItem h="10" colStart={1} colEnd={2}>
        <Input
          width={"100%"}
          borderRadius={4}
          backgroundColor={"#2C2E33"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
          placeholder={"Enter a secret message here"}
          border={"none"}
          onChange={(e) => setSecret(e.target.value)}
        />
      </GridItem>
      <GridItem h="10" colStart={2} colEnd={4}>
        <Button
          variant={"outline"}
          borderColor={signedDid ? "success" : "primary"}
          color={signedDid ? "success" : "primary"}
          borderRadius={4}
          width={"100%"}
          onClick={handleSign}
          isDisabled={secret.length < 3}
        >
          {signedDid ? (
            <>
              Signed <Icon ml={2} as={TbCheck} />
            </>
          ) : (
            "Sign"
          )}
        </Button>
      </GridItem>

      <GridItem colStart={1} colEnd={4} mt={6}>
        <Button
          width={"100%"}
          onClick={handleVerify}
          isDisabled={signedDid ? false : true}
          variant={"outline"}
          borderColor={verify ? "success" : "primary"}
          color={verify ? "success" : "primary"}
          borderRadius={4}
        >
          {verify ? (
            <>
              Verified <Icon ml={2} as={TbCheck} />
            </>
          ) : (
            "Verify"
          )}
        </Button>
      </GridItem>
    </Grid>
  );
}

export default StepSign;
