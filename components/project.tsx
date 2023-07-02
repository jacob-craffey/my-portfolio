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
    <Card isPressable isHoverable onClick={() => setVisible(true)} >
      <Card.Image
        src={project.imageSrc}
        objectFit="cover"
        alt="Card image background"
        showSkeleton
      />
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#00000066",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
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
