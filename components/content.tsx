import { Box } from "./box";
import { Intro } from "./intro";
import { Projects } from "./projects";
import { Screen } from "./screen";
import { Technologies } from "./technologies";

export const Content = () => (
  <Box
    css={{
      px: "$12",
      "@xsMax": { px: "0px" },
    }}
  >
    <Screen>
      <Intro />
    </Screen>
    <Screen>
      <Projects />
    </Screen>
    <Screen>
      <Technologies />
    </Screen>
  </Box>
);
