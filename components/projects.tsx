import { Card, Grid, Text } from "@nextui-org/react";
import { Project } from "./project";
import projectsData from "../public/projects";

export const Projects = () => {
  return (
    <Card
      css={{
        mw: "1000px",
        p: "$10",
        bg: "#101010",
      }}
      id="experience"
    >
      <Card.Header>
        <Text h2>Experience</Text>
      </Card.Header>

      <Grid.Container gap={2} css={{ justifyContent: "center" }}>
        {projectsData.map((project, index) => (
          <Grid xs={12} sm={5} md={5} key={index}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid.Container>
    </Card>
  );
};
