import { Box, Tabs, TabPanel, TabPanels } from "@chakra-ui/react";
import StepsHeader from "./components/Steps/StepsHeader";
import StepCreate from "./components/Steps/StepCreate";
import StepResolve from "./components/Steps/StepResolve";
import StepSign from "./components/Steps/StepSign";
import { useState } from "react";

const App = () => {
  const [status, setStatus] = useState<string[]>([]);
  const [did, setDid] = useState<string>("");
  const [didResolution, setDidResolution] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);

  const updateStatus = (value: string) => {
    setStatus([...status, value]);
  };

  return (
    <Box
      m={"auto"}
      mt={12}
      p={12}
      border={"1px solid"}
      borderColor={"blackOpaque"}
      width={"700px"}
      borderRadius={4}
    >
      <Tabs variant="unstyled">
        <StepsHeader status={status} />
        <TabPanels>
          <TabPanel>
            <StepCreate
              handleStatus={updateStatus}
              handleDid={setDid}
              setPrivateKeys={setPrivateKey}
            />
          </TabPanel>
          <TabPanel>
            <StepResolve
              did={did}
              handleStatus={updateStatus}
              updataDidResolved={setDidResolution}
            />
          </TabPanel>
          <TabPanel>
            <StepSign didResolution={didResolution} privateKey={privateKey} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default App;
