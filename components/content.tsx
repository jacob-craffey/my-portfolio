import { Text, Card } from "@nextui-org/react";
import { Box } from "./box";
import ContactForm from "./contact-form";
import { Intro } from "./intro";
import { Projects } from "./projects";
import { Screen } from "./screen";

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
      <ContactForm />
    </Screen>
  </Box>
);
