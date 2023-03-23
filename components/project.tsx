import { Card, Col, Modal, Text } from "@nextui-org/react";
import { useState } from "react";
import { ProjectModal } from "./project-modal";
import Project from "@/models/project";

interface ProjectProps {
  project: Project;
}

export const Project = (projectProps: ProjectProps) => {
  const { project } = projectProps;
  const [visible, setVisible] = useState(false);

  return (
    <Card isPressable isHoverable onClick={() => setVisible(true)}>
      <Card.Image
        src={project.imageSrc}
        objectFit="contain"
        alt="Card image background"
        width="100%"
        height="100%"
        showSkeleton
      />
      <Card.Footer
        css={{
          position: "absolute",
          bgColor: "rgba(0, 0, 0, 0.75)",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Text
          color="#fff"
          css={{
            "@xsMax": {
              fontSize: "$space$6",
              fontWeight: "normal",
            },
            "@xs": {
              fontSize: "$space$8",
            },
          }}
          b
        >
          {project.name}
        </Text>
      </Card.Footer>
      <ProjectModal
        isOpen={visible}
        closeHandler={() => setVisible(false)}
        project={project}
      />
    </Card>
  );
};
