import { Card, Grid, Text } from "@nextui-org/react";
import { Project } from "./project";
import projectsData from "../public/projects";

export const Projects = () => {
  return (
    <Card
      css={{
        mw: "1200px",
        p: "$10",
        bg: "transparent",
        bf: "blur(10px) saturate(1.8) brightness(0.4)",
      }}
    >
      <Card.Header>
        <Text
          h1
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
        >
          Experience
        </Text>
      </Card.Header>

      <Grid.Container gap={5} css={{ justifyContent: "center" }}>
        {projectsData.map((project, index) => (
          <Grid xs={15} sm={5} md={5} key={index}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid.Container>
    </Card>
  );
};
